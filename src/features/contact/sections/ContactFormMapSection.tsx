"use client";

import { type FormEvent, useEffect, useState } from "react";
import { Button } from "@/src/components/ui/app-button";
import { useCreateContactSubmissionMutation } from "@/src/store/strapiApi";

const OPEN_STREET_MAP_EMBED_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=38.7905%2C9.0074%2C38.8315%2C9.0368&layer=mapnik&marker=9.0221%2C38.8110";

const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 80;
const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 500;
const PHONE_MIN_DIGITS = 7;
const PHONE_MAX_DIGITS = 15;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormField = "name" | "title" | "email" | "phone" | "message";

export function ContactFormMapSection() {
  const [createContactSubmission, { isLoading }] =
    useCreateContactSubmissionMutation();
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FormField, string>>>({});
  const [formValues, setFormValues] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFieldChange = (field: FormField, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateForm = (): boolean => {
    const errors: Partial<Record<FormField, string>> = {};
    const trimmedName = formValues.name.trim();
    const trimmedEmail = formValues.email.trim();
    const trimmedPhone = formValues.phone.trim();
    const trimmedMessage = formValues.message.trim();

    if (trimmedName.length < NAME_MIN_LENGTH || trimmedName.length > NAME_MAX_LENGTH) {
      errors.name = `Name should be ${NAME_MIN_LENGTH}-${NAME_MAX_LENGTH} characters.`;
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      errors.email = "Enter a valid email address.";
    }

    if (!/^\d+$/.test(trimmedPhone)) {
      errors.phone = "Phone number should contain digits only.";
    } else if (trimmedPhone.length < PHONE_MIN_DIGITS || trimmedPhone.length > PHONE_MAX_DIGITS) {
      errors.phone = `Phone number should be ${PHONE_MIN_DIGITS}-${PHONE_MAX_DIGITS} digits.`;
    }

    if (!formValues.title) {
      errors.title = "Please select a subject.";
    }

    if (trimmedMessage.length < MESSAGE_MIN_LENGTH || trimmedMessage.length > MESSAGE_MAX_LENGTH) {
      errors.message = `Message should be ${MESSAGE_MIN_LENGTH}-${MESSAGE_MAX_LENGTH} characters.`;
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      setErrorMessage(null);
      await createContactSubmission({
        data: {
          name: formValues.name,
          title: formValues.title,
          email: formValues.email,
          phone: formValues.phone,
          message: formValues.message,
        },
      }).unwrap();

      setFormValues({
        name: "",
        title: "",
        email: "",
        phone: "",
        message: "",
      });
      setFieldErrors({});
      setShowSuccessToast(true);
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    if (!showSuccessToast) return;
    const timeoutId = window.setTimeout(() => {
      setShowSuccessToast(false);
    }, 3500);
    return () => window.clearTimeout(timeoutId);
  }, [showSuccessToast]);

  return (
    <>
      {showSuccessToast ? (
        <div className="fixed right-4 top-4 z-50 rounded-2xl border border-primary/20 bg-white p-4 shadow-[0_20px_40px_rgba(22,28,45,0.14)]">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-primary">
              <svg className="size-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M4.5 10.5L8.2 14L15.5 6.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-text-100">Message sent successfully</p>
              <p className="text-xs font-light text-muted">We will get back to you shortly.</p>
            </div>
          </div>
        </div>
      ) : null}

      <section className="flex w-full justify-center bg-accent-60/35 px-8 pt-5 pb-0 md:px-20 md:py-5 lg:px-[237px] lg:pb-[116px]">
        <div className="flex w-full max-w-[1252px] flex-col gap-8 md:gap-5 lg:flex-row">
          <div className="w-full rounded-2xl bg-white lg:max-w-[607px]">
            <div className="flex w-full flex-col gap-6 md:gap-6">
              <div className="flex flex-col items-center gap-4 text-center md:items-center md:text-center">
                <h1 className="font-(family-name:--font-nata-sans) text-[36px] font-semibold leading-normal tracking-[-0.04em] text-text-100">
                  Contact us
                </h1>
                <p className="max-w-[286px] text-sm font-light leading-normal tracking-[-0.0143em] text-text-100/70 md:max-w-[506px] md:text-sm md:tracking-[-0.0143em]">
                  Feel free to reach out! Whether you&apos;re looking for more details, have feedback, or just want to say hello, we&apos;re here to help.
                </p>
              </div>

              <form
                className="flex w-full flex-col gap-[26px] rounded-2xl bg-white px-4 pb-4 pt-6 shadow-[0px_34px_33px_-23px_rgba(22,28,45,0.13)] md:px-4 md:pb-4 md:pt-6 lg:p-10"
                onSubmit={handleSubmit}
              >
                <label className="flex flex-col gap-3">
                  <span className="text-sm font-medium leading-normal tracking-[-0.0071em] text-text-100">
                    First &amp; Last Name
                  </span>
                  <input
                    type="text"
                    placeholder="i.e. John Doe"
                    value={formValues.name}
                    onChange={(e) => handleFieldChange("name", e.target.value)}
                    minLength={NAME_MIN_LENGTH}
                    maxLength={NAME_MAX_LENGTH}
                    required
                    className="h-[50px] rounded-lg border border-border-card px-[18px] text-[15px] font-light leading-[1.73] tracking-[-0.0067em] text-text-100/70 outline-none placeholder:text-text-100/70 focus:border-primary"
                  />
                </label>
                {fieldErrors.name ? <p className="-mt-3 text-xs text-red-500">{fieldErrors.name}</p> : null}

                <label className="flex flex-col gap-3">
                  <span className="text-sm font-medium leading-normal tracking-[-0.0071em] text-text-100">
                    Email
                  </span>
                  <input
                    type="email"
                    placeholder="i.e. john@mail.com"
                    value={formValues.email}
                    onChange={(e) => handleFieldChange("email", e.target.value)}
                    maxLength={120}
                    required
                    className="h-[50px] rounded-lg border border-border-card px-[18px] text-[15px] font-light leading-[1.73] tracking-[-0.0067em] text-text-100/70 outline-none placeholder:text-text-100/70 focus:border-primary"
                  />
                </label>
                {fieldErrors.email ? <p className="-mt-3 text-xs text-red-500">{fieldErrors.email}</p> : null}

                <label className="flex flex-col gap-3">
                  <span className="text-sm font-medium leading-normal tracking-[-0.0071em] text-text-100">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    placeholder="i.e. 0912345678"
                    value={formValues.phone}
                    onChange={(e) => handleFieldChange("phone", e.target.value.replace(/\D/g, ""))}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    minLength={PHONE_MIN_DIGITS}
                    maxLength={PHONE_MAX_DIGITS}
                    required
                    className="h-[50px] rounded-lg border border-border-card px-[18px] text-[15px] font-light leading-[1.73] tracking-[-0.0067em] text-text-100/70 outline-none placeholder:text-text-100/70 focus:border-primary"
                  />
                </label>
                {fieldErrors.phone ? <p className="-mt-3 text-xs text-red-500">{fieldErrors.phone}</p> : null}

                <label className="flex flex-col gap-3">
                  <span className="text-sm font-medium leading-normal tracking-[-0.0071em] text-text-100">
                    Subject
                  </span>
                  <div className="relative w-full">
                    <select
                      value={formValues.title}
                      onChange={(e) => handleFieldChange("title", e.target.value)}
                      required
                      className="h-[50px] w-full appearance-none rounded-lg border border-border-card bg-white px-[18px] pr-10 text-[15px] font-light leading-[1.73] tracking-[-0.0067em] text-text-100 outline-none focus:border-primary"
                    >
                      <option value="" disabled className="text-text-100/70">
                        i.e. I need a help
                      </option>
                      <option value="support">Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="general">General inquiry</option>
                    </select>
                    <svg
                      className="pointer-events-none absolute right-[13px] top-1/2 size-4 -translate-y-1/2 text-muted"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 8L10 13L15 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </label>
                {fieldErrors.title ? <p className="-mt-3 text-xs text-red-500">{fieldErrors.title}</p> : null}

                <label className="flex flex-col gap-3">
                  <span className="text-sm font-medium leading-normal tracking-[-0.0071em] text-text-100">
                    Message
                  </span>
                  <textarea
                    placeholder="Type your message"
                    rows={5}
                    value={formValues.message}
                    onChange={(e) => handleFieldChange("message", e.target.value)}
                    minLength={MESSAGE_MIN_LENGTH}
                    maxLength={MESSAGE_MAX_LENGTH}
                    required
                    className="h-[143px] resize-none rounded-lg border border-border-card px-[18px] py-3 text-[15px] font-light leading-[1.73] tracking-[-0.0067em] text-text-100/70 outline-none placeholder:text-text-100/70 focus:border-primary"
                  />
                </label>
                {fieldErrors.message ? <p className="-mt-3 text-xs text-red-500">{fieldErrors.message}</p> : null}

                <Button
                  type="submit"
                  variant="primary"
                  className="h-[59px] w-full rounded-[10px] text-[17px] font-medium"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send"}
                </Button>
                {errorMessage ? (
                  <p className="-mt-2 text-center text-sm font-light text-red-500">
                    {errorMessage}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
          <div className="relative h-[792px] w-full overflow-hidden rounded-2xl md:block lg:h-auto lg:min-h-[792px] lg:flex-1">
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
