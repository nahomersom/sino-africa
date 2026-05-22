"use client";

import { useEffect, useState, type CSSProperties, type FormEvent } from "react";
import { Button } from "@/src/components/ui/app-button";
import { cn } from "@/src/lib/utils";
import { useCreateContactSubmissionMutation } from "@/src/store/strapiApi";

/**
 * Sur construction Head office (pin matches shared place:
 * google.com/maps/place/Sur+construction+Head+office/ — coords 8.9998439, 38.7702279).
 */
const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=8.9998439%2C38.7702279&z=17&hl=en&output=embed";

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

      <section
        className="relative flex w-full justify-center overflow-hidden bg-accent-60/35 px-4 pt-5 pb-6 min-[400px]:px-5 sm:px-6 sm:pb-8 md:px-8 md:pt-5 md:pb-8 lg:px-10 lg:pb-10 xl:px-12 xl:pb-[116px] 2xl:px-16"
        style={{ "--contact-cta": "var(--primary)" } as CSSProperties}
      >
        <div className="pointer-events-none absolute right-[-532px] top-[2px] z-0 size-[847px] rounded-full bg-[#64C294]/20 blur-[252px] hidden lg:block" />
        <div className="pointer-events-none absolute -left-[532px] top-[70px] z-0 size-[847px] rounded-full bg-[#64C294]/20 blur-[252px] hidden lg:block" />

        <div className="relative z-10 flex w-full min-w-0 max-w-[1252px] flex-col items-stretch gap-7 max-md:items-center md:gap-6 xl:flex-row xl:items-stretch">
          <div className="w-full min-w-0 max-w-[366px] rounded-[16px] bg-white opacity-100 max-md:mx-auto max-md:min-h-[834px] md:max-w-none md:min-h-0 md:rounded-2xl xl:max-w-[607px] xl:shrink-0">
            <div className="flex h-full min-h-0 w-full min-w-0 flex-col gap-8 md:gap-6">
              <div className="flex flex-col items-center gap-3 text-center sm:gap-4 md:items-center md:text-center">
                <h1 className="font-(family-name:--font-nata-sans) text-[28px] font-semibold leading-tight tracking-[-0.04em] text-text-100 min-[400px]:text-[32px] sm:text-[34px] md:text-[36px] md:leading-normal">
                  Contact us
                </h1>
                <p className="w-full max-w-[32rem] text-sm font-light leading-relaxed tracking-[-0.0143em] text-text-100/70 min-[400px]:text-[15px] md:max-w-none md:text-base md:leading-normal">
                  Feel free to reach out! Whether you&apos;re looking for more details, have feedback, or just want to say hello, we&apos;re here to help.
                </p>
              </div>

              <form
                className="flex w-full min-w-0 flex-col gap-8 rounded-[16px] bg-white px-3 pb-4 pt-5 opacity-100 shadow-[0px_34px_33px_-23px_rgba(22,28,45,0.13)] min-[400px]:px-4 min-[400px]:pt-6 md:gap-[26px] md:rounded-2xl md:px-5 md:pb-5 md:pt-6 xl:p-10"
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
                  className={cn(
                    "h-[59px] w-full rounded-[10px] text-[17px] font-medium",
                    "!bg-[var(--contact-cta)] hover:opacity-90",
                  )}
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
          <div className="relative w-full min-w-0 shrink-0 overflow-hidden rounded-2xl opacity-100 max-md:mx-auto max-md:h-[792px] max-md:max-w-[366px] max-md:rounded-[16px] md:block md:h-[min(50vw,560px)] md:min-h-[380px] md:max-w-none md:rounded-2xl lg:min-h-[440px] xl:h-auto xl:min-h-[792px] xl:flex-1">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              title="Sur construction Head office on Google Maps"
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
