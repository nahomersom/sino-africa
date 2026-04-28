"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useGetCareersQuery } from "@/src/store/strapiApi";

export function JobListingSection() {
  const { data: careers = [], isLoading } = useGetCareersQuery();

  if (isLoading) {
    return (
      <section className="relative flex w-full flex-col items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </section>
    );
  }

  return (
    <section className="relative flex w-full flex-col items-center bg-white overflow-hidden font-outfit
      pt-10 pb-10 px-8 gap-[45px]
      md:pt-20 md:pb-[88px] md:px-20
      lg:pt-20 lg:pb-[88px] lg:px-[237px]">

      {/* Background Decoration */}
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

      <div className="z-10 flex flex-col gap-2 w-full max-w-[366px] md:max-w-[677px] lg:max-w-[1254px]">
        {careers.length > 0 ? (
          careers.map((job, index) => {
            const isExpired = (deadline: string) => {
              if (!deadline) return false;
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              const expiryDate = new Date(deadline);
              return expiryDate < today;
            };

            const jobExpired = isExpired(job.deadline);

            return (
              <motion.div
                key={job.documentId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-[#F6F7FB] p-6 rounded-[24px] gap-6 w-full
                  md:flex-row md:items-center md:justify-between md:h-[117px] md:gap-0
                  lg:bg-white lg:h-[132px] lg:border lg:border-gray-100"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-medium text-[#161C2D] md:text-base lg:text-[24px]">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#161C2D]/70 md:text-xs lg:text-base">
                    <span>{job.level}</span>
                    <span>{job.type}</span>
                    <span>{job.location}</span>
                    {jobExpired ? (
                      <span className="font-semibold text-red-500">Expired</span>
                    ) : (
                      <span className="font-medium text-primary">Expire Date: {job.deadline}</span>
                    )}
                  </div>
                </div>

                <Link
                  href={`/careers/${job.documentId}`}
                  className={`flex items-center justify-center text-white text-sm font-outfit
                    h-[53px] w-full rounded-[16px] px-6 py-4 gap-2 transition-all
                    md:h-[69px] md:w-[159px] md:rounded-[23px]
                    lg:h-[69px] lg:w-[159px] lg:rounded-[23px]
                    ${jobExpired ? "bg-gray-400 opacity-70" : "bg-[#64C294] hover:bg-[#55a67f]"}`}
                >
                  {jobExpired ? "Expired" : "Apply for position"}
                </Link>
              </motion.div>
            );
          })
        ) : (
          <div className="mx-auto flex w-full max-w-[379px] flex-col items-center justify-center gap-[18px] py-10 text-center">
            <Image
              src="/icons/joblist-icon.png"
              alt=""
              width={170}
              height={170}
              className="object-contain"
            />
            <div className="flex flex-col gap-[18px]">
              <h3 className="font-outfit text-[32px] max-w-[284px] mx-auto font-medium leading-[140%] tracking-[0%] text-[#161C2D]">
                No Opportunities at the moment.
              </h3>
              <p className="text-[18px] font-light leading-[150%] text-[#5C606C]">
                We&apos;re not hiring at the moment, but great things are on the way. Keep an eye on this space you might find your perfect role soon.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
