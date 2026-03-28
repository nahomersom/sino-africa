

export function ContactSection() {
  return (
    <section
      className="relative overflow-hidden flex w-full flex-col items-center bg-white h-auto pt-[40px] pb-[40px] px-[20px] gap-[32px] md:px-[80px] md:py-[60px] lg:min-h-[851px] lg:pt-[100px] lg:pb-[100px] lg:px-[240px] lg:gap-[49px]"
    >
      {/* Glow Effects */}
      <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[847px] h-[847px] bg-[#64C294] opacity-20 blur-[252px] rounded-full pointer-events-none z-0" />
      <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-[847px] h-[847px] bg-[#64C294] opacity-20 blur-[252px] rounded-full pointer-events-none z-0" />

      {/* Postal Icon */}
      <div
        className="relative z-10 flex items-center justify-center rounded-full bg-[#64C294] shrink-0 w-[60px] h-[60px] lg:w-[78px] lg:h-[79px]"
      >
        <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.9565 0H3.04348C1.36261 0 1.04778e-08 1.32278 1.04778e-08 2.95452V5.31814C-4.12187e-05 5.53438 0.121595 5.73337 0.31713 5.83695L13.7084 12.9278C13.8902 13.0241 14.1098 13.0241 14.2916 12.9278L27.6829 5.83695C27.8784 5.73337 28 5.53438 28 5.31814V2.95452C28 1.32278 26.6374 0 24.9565 0Z" fill="white" />
          <path d="M14.8747 14.1983C14.3301 14.4969 13.6723 14.4969 13.1277 14.1983L0.014 7L0 7.00919V19.9366C0 21.6285 1.36261 23 3.04348 23H24.9565C26.6374 23 28 21.6285 28 19.9366V7.00919L27.986 7.00061L14.8747 14.1983Z" fill="white" />
        </svg>
      </div>

      {/* Header Container */}
      <div
        className="relative z-10 flex flex-col items-center text-center w-full max-w-[502px] h-auto gap-[10px] lg:w-[502px] lg:h-[132px]"
      >
        <h2
          className="font-medium text-[#161C2D] text-[28px] md:text-[32px] lg:text-[36px] leading-[140%] tracking-normal"
        >
          Get In Touch with us
        </h2>
        <p
          className="font-light text-[#5C606C] text-[16px] lg:text-[18px] leading-[150%]"
        >
          Feel free to reach out! Whether you're looking for more details, have feedback, or just want to say hello, we're here to help.
        </p>
      </div>

      {/* Form Container */}
      <form
        className="relative z-10 flex flex-col items-center w-full max-w-[522px] gap-[24px]"
      >
        <div className="flex w-full flex-col gap-[16px] lg:gap-6">
          <input
            type="text"
            placeholder="First Name"
            className="w-full rounded-[16px] lg:rounded-[8px] border border-[#E2E4E8] px-4 py-4 lg:py-3 text-[14px] placeholder:text-[#676D80] focus:outline-none focus:ring-1 focus:ring-[#64C294]"
          />
          {/* Email and Phone Side-by-Side Row */}
          <div className="flex w-full flex-row gap-[16px] lg:gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full min-w-0 rounded-[16px] lg:rounded-[8px] border border-[#E2E4E8] px-4 py-4 lg:py-3 text-[14px] placeholder:text-[#676D80] focus:outline-none focus:ring-1 focus:ring-[#64C294]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full min-w-0 rounded-[16px] lg:rounded-[8px] border border-[#E2E4E8] px-4 py-4 lg:py-3 text-[14px] placeholder:text-[#676D80] focus:outline-none focus:ring-1 focus:ring-[#64C294]"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full rounded-[16px] lg:rounded-[8px] border border-[#E2E4E8] px-4 py-4 lg:py-3 text-[14px] placeholder:text-[#676D80] focus:outline-none focus:ring-1 focus:ring-[#64C294] resize-y"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center bg-[#64C294] text-white transition-opacity hover:opacity-90 active:scale-95 font-medium rounded-[20px] lg:rounded-[23px] gap-[8px] w-full md:w-[142px] min-h-[56px] lg:min-h-[69px] p-[16px] lg:p-[24px]"
        >
          Contact us
        </button>
      </form>
    </section>
  );
}


