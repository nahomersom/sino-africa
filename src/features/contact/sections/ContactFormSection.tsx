"use client";

import { Button } from "@/src/components/ui/app-button";

type ContactFormSectionProps = {
  heading: string;
  description: string;
  buttonLabel: string;
};

export function ContactFormSection({
  heading,
  description,
  buttonLabel,
}: ContactFormSectionProps) {
  return (
    <section className="relative flex w-full justify-center px-6 py-7 pb-28 md:px-16 lg:px-60">
      <div className="flex w-full max-w-5xl flex-col gap-8 lg:flex-row lg:gap-6">
        <div className="flex flex-col gap-8 lg:max-w-[607px] lg:flex-1">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-semibold tracking-tight text-text-100">
              {heading}
            </h2>
            <p className="text-base font-light leading-6 text-text-100/70">
              {description}
            </p>
          </div>

          <form
            className="flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-[0px_34px_33px_-23px_rgba(22,28,45,0.13)] lg:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <InputField label="First & Last Name" placeholder="i.e. John Doe" />
            <InputField
              label="Email"
              placeholder="i.e. john@mail.com"
              type="email"
            />
            <InputField
              label="Subject"
              placeholder="i.e. I need a help"
            />
            <TextareaField
              label="Message"
              placeholder="Type you message"
            />
            <Button type="submit" variant="primary" className="w-full rounded-lg">
              {buttonLabel}
            </Button>
          </form>
        </div>

        <div className="pointer-events-none hidden items-end lg:flex lg:flex-1">
          <svg
            viewBox="0 0 400 500"
            className="h-auto w-full opacity-[0.08]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M200 50C120 50 60 120 60 200C60 320 200 460 200 460C200 460 340 320 340 200C340 120 280 50 200 50ZM200 260C170 260 140 230 140 200C140 170 170 140 200 140C230 140 260 170 260 200C260 230 230 260 200 260Z"
              fill="#64C294"
            />
            <circle cx="200" cy="200" r="30" fill="#64C294" opacity="0.3" />
            <circle cx="120" cy="300" r="8" fill="#64C294" opacity="0.4" />
            <circle cx="280" cy="280" r="6" fill="#64C294" opacity="0.3" />
            <circle cx="300" cy="350" r="10" fill="#64C294" opacity="0.2" />
            <circle cx="100" cy="380" r="5" fill="#64C294" opacity="0.3" />
            <path
              d="M80 420C80 420 120 400 160 410C200 420 240 400 280 410C320 420 360 400 360 400"
              stroke="#64C294"
              strokeWidth="2"
              opacity="0.2"
            />
            <path
              d="M60 440C60 440 100 420 140 430C180 440 220 420 260 430C300 440 340 420 380 430"
              stroke="#64C294"
              strokeWidth="1.5"
              opacity="0.15"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

function InputField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-text-100">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#E7E9ED] bg-white px-4 py-3 text-[15px] font-light text-text-100 outline-none placeholder:text-text-100/70 focus:border-primary"
      />
    </div>
  );
}

function TextareaField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-text-100">{label}</label>
      <textarea
        placeholder={placeholder}
        rows={5}
        className="w-full resize-none rounded-lg border border-[#E7E9ED] bg-white px-4 py-3 text-[15px] font-light text-text-100 outline-none placeholder:text-text-100/70 focus:border-primary"
      />
    </div>
  );
}
