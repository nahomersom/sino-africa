/**
 * Helpers for turning raw contact strings into clickable hrefs.
 *
 * Phone numbers redirect to WhatsApp (`wa.me`) and emails open Gmail's web
 * compose window. Both are plain `https:` URLs that open in a new tab — we
 * avoid `mailto:` because it silently does nothing when no desktop mail client
 * is configured. These must be rendered with a plain `<a>`: Next's `<Link>`
 * attempts client-side navigation/prefetch on them, which opens a blank tab.
 */

/**
 * Gmail web-compose href from an email address. Strips surrounding whitespace
 * and, when provided, pre-fills the subject line.
 */
export function gmailHref(email: string, subject?: string): string {
  const params = new URLSearchParams({ view: "cm", fs: "1", to: email.trim() });
  if (subject) params.set("su", subject);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

/**
 * WhatsApp (`wa.me`) href from a phone number. Strips every non-digit, so
 * `+251-944-317-816` becomes `https://wa.me/251944317816`.
 */
export function whatsAppHref(phone: string): string {
  return `https://wa.me/${phone.replace(/\D/g, "")}`;
}

/**
 * Clickable href for a phone number. The +251-982 line opens the native phone
 * dialer (`tel:`); every other number opens a WhatsApp chat. Returns `newTab`
 * so callers know whether to add `target="_blank"` — `tel:` must stay same-tab,
 * `wa.me` opens a new tab.
 */
export function phoneHref(phone: string): { href: string; newTab: boolean } {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("251982")) {
    return { href: `tel:+${digits}`, newTab: false };
  }
  return { href: whatsAppHref(phone), newTab: true };
}
