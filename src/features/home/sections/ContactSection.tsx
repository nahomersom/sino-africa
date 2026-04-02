"use client";

import { type FormEvent, useEffect, useState } from "react";
import { Button } from "@/src/components/ui/app-button";
import { ContactSectionSideBackgrounds } from "@/src/components/ui/contact-section-side-bg";
import { ContactBadgeIcon } from "@/src/components/icons/ContactBadgeIcon";
import { useCreateContactSubmissionMutation } from "@/src/store/strapiApi";

type ContactSectionProps = {
  heading: string;
  description: string;
  buttonLabel: string;
  /** Defaults to "First Name" (home). Use "Full Name" on inner pages when matching design. */
  namePlaceholder?: string;
  /** Optional theme override for heading + primary button. */
  accentColor?: string;
};

const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 80;
const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 500;
const PHONE_MIN_DIGITS = 7;
const PHONE_MAX_DIGITS = 15;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormField = "name" | "title" | "email" | "phone" | "message";

export function ContactSection({
  heading,
  description,
  buttonLabel,
  namePlaceholder = "First Name",
  accentColor,
}: ContactSectionProps) {
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

    if (
      trimmedMessage.length < MESSAGE_MIN_LENGTH ||
      trimmedMessage.length > MESSAGE_MAX_LENGTH
    ) {
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
    <section
      id="contact"
      className="relative flex w-full flex-col items-center gap-[49px] overflow-hidden bg-white px-8 py-10 md:px-20 md:py-[100px] lg:px-[240px] lg:py-[100px]"
    >
      {showSuccessToast ? (
        <div className="fixed right-4 top-4 z-50 rounded-2xl border border-primary/20 bg-white p-4 shadow-[0_20px_40px_rgba(22,28,45,0.14)]">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-primary">
              <svg
                className="size-5"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
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
              <p className="text-sm font-medium text-text-100">
                Message sent successfully
              </p>
              <p className="text-xs font-light text-muted">
                We will get back to you shortly.
              </p>
            </div>
          </div>
        </div>
      ) : null}

    
        <>
          <div className="pointer-events-none absolute right-[-532px] top-[2px] size-[847px] rounded-full bg-primary/30 blur-[252px] hidden lg:block" />
          <div className="pointer-events-none absolute -left-[532px] top-[70px] size-[847px] rounded-full bg-primary/30 blur-[252px] hidden lg:block" />
        </>


      <ContactBadgeIcon
        size={78}
        backgroundColor={accentColor}
        className="relative z-10"
      />

      <div className="relative z-10 flex max-w-[502px] flex-col items-center gap-4">
        <h2
          className="text-center font-(family-name:--font-nata-sans) text-[36px] font-semibold leading-[1.4] tracking-[-0.04em] text-text-100"
          style={accentColor ? { color: accentColor } : undefined}
        >
          {heading}
        </h2>
        <p className="max-w-[502px] text-center text-base font-light leading-normal tracking-[-0.0125em] text-muted md:text-lg md:tracking-[-0.011em]">
          {description}
        </p>
      </div>

      <form
        className="relative z-10 flex w-full max-w-[522px] flex-col items-center gap-6 lg:h-[409px]"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full flex-col gap-6">
          <input
            type="text"
            placeholder={namePlaceholder}
            value={formValues.name}
            onChange={(e) => handleFieldChange("name", e.target.value)}
            minLength={NAME_MIN_LENGTH}
            maxLength={NAME_MAX_LENGTH}
            required
            className="w-full rounded-2xl border border-border-light bg-white px-4 py-4 text-xs font-light text-text-100 outline-none placeholder:text-muted focus:border-primary"
          />
          {fieldErrors.name ? (
            <p className="-mt-2 text-xs text-red-500">{fieldErrors.name}</p>
          ) : null}
          <div className="flex w-full gap-6">
            <input
              type="email"
              placeholder="Email Address"
              value={formValues.email}
              onChange={(e) => handleFieldChange("email", e.target.value)}
              maxLength={120}
              required
              className="w-full rounded-2xl border border-border-light bg-white px-4 py-4 text-xs font-light text-text-100 outline-none placeholder:text-muted focus:border-primary"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formValues.phone}
              onChange={(e) =>
                handleFieldChange("phone", e.target.value.replace(/\D/g, ""))
              }
              inputMode="numeric"
              pattern="[0-9]*"
              minLength={PHONE_MIN_DIGITS}
              maxLength={PHONE_MAX_DIGITS}
              required
              className="w-full rounded-2xl border border-border-light bg-white px-4 py-4 text-xs font-light text-text-100 outline-none placeholder:text-muted focus:border-primary"
            />
          </div>
          {fieldErrors.email || fieldErrors.phone ? (
            <p className="-mt-2 text-xs text-red-500">
              {fieldErrors.email ?? fieldErrors.phone}
            </p>
          ) : null}
          <div className="relative w-full">
            <select
              value={formValues.title}
              onChange={(e) => handleFieldChange("title", e.target.value)}
              required
              className="w-full appearance-none rounded-2xl border border-border-light bg-white px-[13px] pr-10 py-4 text-xs font-light text-text-100 outline-none focus:border-primary"
            >
              <option value="" disabled className="text-muted">
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
          {fieldErrors.title ? (
            <p className="-mt-2 text-xs text-red-500">{fieldErrors.title}</p>
          ) : null}
          <textarea
            placeholder="Message"
            rows={5}
            value={formValues.message}
            onChange={(e) => handleFieldChange("message", e.target.value)}
            minLength={MESSAGE_MIN_LENGTH}
            maxLength={MESSAGE_MAX_LENGTH}
            required
            className="w-full resize-none rounded-2xl border border-border-light bg-white px-4 py-4 text-xs font-light text-text-100 outline-none placeholder:text-muted focus:border-primary"
          />
          <div className="-mt-2 flex items-center justify-between">
            {fieldErrors.message ? (
              <p className="text-xs text-red-500">{fieldErrors.message}</p>
            ) : (
              <span className="text-xs text-muted">
                Recommended: {MESSAGE_MIN_LENGTH}-{MESSAGE_MAX_LENGTH} characters
              </span>
            )}
            <span className="text-xs text-muted">
              {formValues.message.length}/{MESSAGE_MAX_LENGTH}
            </span>
          </div>
        </div>
        <Button
          type="submit"
          variant="primary"
          className="w-[142px] min-h-[56px] lg:min-h-[69px]"
          disabled={isLoading}
          style={accentColor ? { backgroundColor: accentColor } : undefined}
        >
          {isLoading ? "Sending..." : buttonLabel}
        </Button>
        {errorMessage ? (
          <p className="text-center text-sm font-light text-red-500">
            {errorMessage}
          </p>
        ) : null}
      </form>
    </section>
  );
}
