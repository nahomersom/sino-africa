"use client";

import { Button } from "@/src/components/ui/app-button";

const OPEN_STREET_MAP_EMBED_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=38.7905%2C9.0074%2C38.8315%2C9.0368&layer=mapnik&marker=9.0221%2C38.8110";


export function ContactFormMapSection() {
  return (
    <>
      <section
        className="flex w-full justify-center bg-accent-60/35 px-8 pt-5 pb-0 md:px-20 md:py-5 lg:px-[237px] lg:pb-[116px]"
      >
        <div className="flex w-full max-w-[1252px] flex-col gap-8 md:gap-5 lg:flex-row">
          <div className="w-full rounded-2xl bg-white lg:max-w-[607px]">
            <div className="flex w-full flex-col gap-6 md:gap-6">
              <div className="flex flex-col items-center gap-4 text-center md:items-center md:text-center">
                <h1 className="font-(family-name:--font-nata-sans) text-[36px] leading-[1.5] font-semibold tracking-[-0.04em] text-text-100">
                  Contact us
                </h1>
                <p className="max-w-[286px] text-sm leading-[1.5] font-light tracking-[-0.0143em] text-text-100/70 md:max-w-[506px] md:text-sm md:tracking-[-0.0143em]">
                  Feel free to reach out! Whether you&apos;re looking for more details,
                  have feedback, or just want to say hello, we&apos;re here to help.
                </p>
              </div>

              <form
                className="flex w-full flex-col gap-[26px] rounded-2xl bg-white px-4 pt-6 pb-4 shadow-[0px_34px_33px_-23px_rgba(22,28,45,0.13)] md:px-4 md:pt-6 md:pb-4 lg:p-10"
                onSubmit={(event) => event.preventDefault()}
              >
                <label className="flex flex-col gap-3">
                  <span className="text-sm leading-[1.5] font-medium tracking-[-0.0071em] text-text-100">
                    First &amp; Last Name
                  </span>
                  <input
                    type="text"
                    placeholder="i.e. John Doe"
                    className="h-[50px] rounded-lg border border-border-card px-[18px] text-[15px] leading-[1.73] font-light tracking-[-0.0067em] text-text-100/70 outline-none placeholder:text-text-100/70 focus:border-primary"
                  />
                </label>

                <label className="flex flex-col gap-3">
                  <span className="text-sm leading-[1.5] font-medium tracking-[-0.0071em] text-text-100">
                    Email
                  </span>
                  <input
                    type="email"
                    placeholder="i.e. john@mail.com"
                    className="h-[50px] rounded-lg border border-border-card px-[18px] text-[15px] leading-[1.73] font-light tracking-[-0.0067em] text-text-100/70 outline-none placeholder:text-text-100/70 focus:border-primary"
                  />
                </label>

                <label className="flex flex-col gap-3">
                  <span className="text-sm leading-[1.5] font-medium tracking-[-0.0071em] text-text-100">
                    Subject
                  </span>
                  <input
                    type="text"
                    placeholder="i.e. I need a help"
                    className="h-[50px] rounded-lg border border-border-card px-[18px] text-[15px] leading-[1.73] font-light tracking-[-0.0067em] text-text-100/70 outline-none placeholder:text-text-100/70 focus:border-primary"
                  />
                </label>

                <label className="flex flex-col gap-3">
                  <span className="text-sm leading-[1.5] font-medium tracking-[-0.0071em] text-text-100">
                    Message
                  </span>
                  <textarea
                    placeholder="Type you message"
                    rows={5}
                    className="h-[143px] resize-none rounded-lg border border-border-card px-[18px] py-3 text-[15px] leading-[1.73] font-light tracking-[-0.0067em] text-text-100/70 outline-none placeholder:text-text-100/70 focus:border-primary"
                  />
                </label>

                <Button type="submit" variant="primary" className="h-[59px] w-full rounded-[10px] text-[17px] font-medium">
                  Send
                </Button>
              </form>
            </div>
          </div>
          <div className="relative h-[792px] w-full overflow-hidden rounded-2xl md:block lg:min-h-[792px] lg:h-auto lg:flex-1">
            <iframe
              src={OPEN_STREET_MAP_EMBED_URL}
              title="Sino Africa location map"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

     
    </>
  );
}
