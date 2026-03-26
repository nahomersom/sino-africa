import Image from "next/image";

export function ContactSection() {
  return (
    <section className="bg-[#F4F7FA] px-6 py-16 md:px-0 md:py-[100px]">
      <div className="mx-auto flex w-full max-w-[522px] flex-col items-center justify-center gap-[49px]">
        <div className="flex h-[78px] w-[78px] items-center justify-center">
          {/* Figma "Section Icon" */}
          <Image
            src="/images/our-verticals/contact-icon.svg"
            alt=""
            width={78}
            height={78}
            unoptimized
          />
        </div>

        <div className="flex w-full flex-col items-center text-center">
          <h2 className="text-[36px] font-medium text-zinc-900" style={{ letterSpacing: "-0.6250000093132257%" }}>
            Get In Touch with us
          </h2>
          <p
            className="mt-3 text-[18px] font-light leading-6 text-zinc-600"
            style={{ letterSpacing: "-1.1111111276679568%" }}
          >
            Feel free to reach out! Whether you&apos;re looking for more details, have feedback,
            or just want to say hello, we&apos;re here to help.
          </p>
        </div>

        <form className="w-full space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="First Name"
              className="w-full rounded-[16px] border border-[#E8E8E9] bg-white px-4 py-4 text-[12px] font-light text-zinc-900 outline-none transition focus:border-primary"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="w-full rounded-[16px] border border-[#E8E8E9] bg-white px-4 py-4 text-[12px] font-light text-zinc-900 outline-none transition focus:border-primary"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full rounded-[16px] border border-[#E8E8E9] bg-white px-4 py-4 text-[12px] font-light text-zinc-900 outline-none transition focus:border-primary"
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            className="w-full resize-none rounded-[16px] border border-[#E8E8E9] bg-white px-4 py-4 text-[12px] font-light text-zinc-900 outline-none transition focus:border-primary"
          />

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="flex h-[54px] w-[142px] items-center justify-center rounded-[23px] bg-primary text-[14px] font-normal text-white"
            >
              Contact us
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
