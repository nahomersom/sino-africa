"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useGetCareerByDocumentIdQuery, useGetCareersQuery } from "@/src/store/strapiApi";
import { StrapiBlocksRichText } from "@/src/lib/strapiBlocksRichText";

export function CareerDetail({ documentId }: { documentId: string }) {
  const { data: job, isLoading } = useGetCareerByDocumentIdQuery(documentId);
  const { data: otherJobs = [], isLoading: isOtherLoading } = useGetCareersQuery();

  if (isLoading || isOtherLoading) {
    return (
      <section className="relative flex w-full flex-col items-center justify-center py-40">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </section>
    );
  }

  if (!job) {
    return (
      <section className="relative flex w-full flex-col items-center justify-center py-40">
        <h2 className="text-2xl font-semibold">Job not found</h2>
        <Link href="/careers" className="mt-4 text-primary hover:underline">
          Back to Careers
        </Link>
      </section>
    );
  }

  const filteredJobs = otherJobs.filter((j) => j.documentId !== documentId);

  const isExpired = (deadline: string) => {
    if (!deadline) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const expiryDate = new Date(deadline);
    return expiryDate < today;
  };

  const jobExpired = isExpired(job.deadline);

  return (
    <>
      <section className="relative flex w-full flex-col items-center bg-white overflow-hidden
        pt-[131px] pb-10 px-8
        md:pt-[102px] md:pb-[88px] md:px-20
        lg:pt-[189px] lg:pb-[88px] lg:px-[237px]">

        {/* Background Decoration */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "url('/images/sino-symbol-tile.svg')", backgroundSize: "28px", backgroundRepeat: "repeat" }}
        />

        <div className="z-10 flex w-full max-w-[1254px] flex-col items-start gap-4">
          <Link href="/careers" className="flex items-center gap-2 text-[18px] text-[#161C2D]/70 hover:text-primary transition-colors font-outfit">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to careers
          </Link>

          <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-[16px]">
            {/* Left Column: Job Info */}
            <div className="flex flex-col gap-6 lg:w-[539px] lg:sticky h-fit">
              <h1 className="text-[32px] font-semibold leading-tight text-[#161C2D] md:text-[36px] lg:text-[36px]">
                {job.title}
              </h1>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#5C606C] md:text-base">
                <span>{job.type}</span>
                <span>{job.location}</span>
                {jobExpired ? (
                  <span className="font-semibold text-red-500 uppercase">Expired</span>
                ) : (
                  <span className="font-medium text-primary">Expire Date: {job.deadline}</span>
                )}
                <span>{job.level}</span>
              </div>

              <div className="flex flex-col gap-4">
                {job.googleFormLink ? (
                  <a
                    href={jobExpired ? undefined : job.googleFormLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center text-white font-medium text-sm
                      h-[69px] w-full rounded-[23px] px-6 py-4 gap-2 md:w-[142px] transition-all
                      ${jobExpired ? "bg-gray-400 cursor-not-allowed opacity-70" : "bg-[#64C294] hover:bg-[#55a67f]"}`}
                    onClick={(e) => jobExpired && e.preventDefault()}
                  >
                    {jobExpired ? "Expired" : "Apply"}
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled={jobExpired}
                    className={`flex items-center justify-center text-white font-medium text-sm
                      h-[69px] w-full rounded-[23px] px-6 py-4 gap-2 md:w-[142px] transition-all
                      ${jobExpired ? "bg-gray-400 cursor-not-allowed opacity-70" : "bg-[#64C294] hover:bg-[#55a67f]"}`}
                  >
                    {jobExpired ? "Expired" : "Apply"}
                  </button>
                )}
                <span className="text-base text-[#5C606C]">jobs@sinoafrica.com</span>
              </div>
            </div>

            {/* Right Column: Job Description */}
            <div className="flex flex-col gap-8 lg:w-[699px] lg:pt-0">
              <StrapiBlocksRichText
                value={job.description}
                className="flex flex-col gap-8 text-[#161C2D]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Jobs Section */}
      {filteredJobs.length > 0 && (
        <section className="relative flex w-full flex-col items-center bg-white overflow-hidden
          pt-10 pb-20 px-8 gap-10
          md:px-20
          lg:px-[237px]">

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "url('/images/sino-symbol-tile.svg')", backgroundSize: "28px", backgroundRepeat: "repeat" }}
          />

          <Image
            src="/assets/images/decoration.png"
            alt=""
            aria-hidden="true"
            width={80}
            height={120}
            className="pointer-events-none absolute bottom-15 right-0 hidden select-none lg:block w-[75px]"
          />

          <div className="z-10 flex flex-col gap-8 w-full max-w-[1254px]">
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-normal tracking-wider text-[#64C294]">CAREERS</span>
              <h2 className="text-[24px] font-semibold text-[#161C2D] md:text-[36px]">Other Jobs</h2>
            </div>

            <div className="flex flex-col gap-2">
              {filteredJobs.map((otherJob, index) => (
                <motion.div
                  key={otherJob.documentId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col bg-[#F6F7FB] p-6 rounded-[24px] gap-6 w-full
                    md:flex-row md:items-center md:justify-between md:h-[117px] md:gap-0
                    lg:bg-[#F6F7FB] lg:h-[132px]"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-medium text-[#161C2D] md:text-base lg:text-[24px]">
                      {otherJob.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#161C2D]/70 md:text-xs lg:text-base">
                      <span>{otherJob.level}</span>
                      <span>{otherJob.type}</span>
                      <span>{otherJob.location}</span>
                      {isExpired(otherJob.deadline) ? (
                        <span className="font-semibold text-red-500 uppercase">Expired</span>
                      ) : (
                        <span className="font-medium text-primary">Expire Date: {otherJob.deadline}</span>
                      )}
                    </div>
                  </div>

                  <Link
                    href={`/careers/${otherJob.documentId}`}
                    className={`flex items-center justify-center text-white font-medium text-sm
                      h-[53px] w-full rounded-[16px] px-6 py-4 gap-2
                      md:h-[69px] md:w-[159px] md:rounded-[23px]
                      lg:h-[69px] lg:w-[159px] lg:rounded-[23px] transition-all
                      ${isExpired(otherJob.deadline) ? "bg-gray-400 cursor-not-allowed opacity-70" : "bg-[#64C294] hover:bg-[#55a67f]"}`}
                    onClick={(e) => isExpired(otherJob.deadline) && e.preventDefault()}
                  >
                    {isExpired(otherJob.deadline) ? "Expired" : "Apply for position"}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
