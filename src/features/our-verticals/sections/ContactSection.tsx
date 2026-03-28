import Image from "next/image";

export function ContactSection() {
  return (
    <section id="contact" className="bg-surface px-6 py-16 lg:px-[240px] lg:py-[100px]">
      <div className="mx-auto flex w-full max-w-[522px] flex-col items-center justify-center gap-[49px]">
        <div className="flex h-[78px] w-[78px] items-center justify-center">
          <Image
            src="/images/our-verticals/contact-icon.svg"
            alt=""
            width={78}
            height={78}
            unoptimized
          />
        </div>

        <div className="flex w-full max-w-[502px] flex-col items-center gap-0 text-center sm:h-[132px] sm:justify-start">
          <h2 className="w-full max-w-[487px] text-[36px] font-medium leading-[1.4em] text-text-100 sm:min-h-[50px]">
            Get In Touch with us
          </h2>
          <p
            className="mt-4 w-full max-w-[502px] text-[18px] font-light leading-[1.5em] text-muted sm:mt-[18px]"
            style={{ letterSpacing: "-0.011111111276679568em" }}
          >
            Feel free to reach out! Whether you&apos;re looking for more details, have feedback, or just want to say
            hello, we&apos;re here to help.
          </p>
        </div>

        <form className="flex w-full max-w-[522px] flex-col items-center gap-6">
          <div className="flex w-full flex-col gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full rounded-2xl border border-[#E8E8E9] bg-white px-4 py-4 text-xs font-light text-[#161C2D] outline-none transition placeholder:text-[#5C606C] focus:border-primary"
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-[#E8E8E9] bg-white px-4 py-4 text-xs font-light text-[#161C2D] outline-none transition placeholder:text-[#5C606C] focus:border-primary"
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-[#E8E8E9] bg-white px-4 py-4 text-xs font-light text-[#161C2D] outline-none transition placeholder:text-[#5C606C] focus:border-primary"
              />
            </div>

            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              className="min-h-[120px] w-full resize-none rounded-2xl border border-[#E8E8E9] bg-white px-4 py-4 text-xs font-light text-[#161C2D] outline-none transition placeholder:text-[#5C606C] focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="flex w-[142px] cursor-pointer items-center justify-center rounded-[23px] bg-primary px-6 py-6 text-sm font-normal text-white"
          >
            Contact us
          </button>
        </form>
      </div>
    </section>
  );
}
