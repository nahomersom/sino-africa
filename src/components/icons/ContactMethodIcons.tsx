import { cn } from "@/src/lib/utils";

/** Inline SVGs so fills resolve `var(--accent-60)` / `var(--primary)` from the page (img[src] cannot). */

export function ContactEmailMethodIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="54" height="54" rx="27" fill="var(--accent-60)" />
      <path
        d="M35.5 17H17.5C16.1193 17 15 18.1233 15 19.5091V21.5163C15 21.7 15.0999 21.869 15.2605 21.9569L26.2605 27.9787C26.4098 28.0604 26.5902 28.0604 26.7395 27.9787L37.7395 21.9569C37.9001 21.869 38 21.7 38 21.5163V19.5091C38 18.1233 36.8807 17 35.5 17Z"
        fill="var(--primary)"
      />
      <path
        d="M27.2185 29.2346C26.7712 29.475 26.2308 29.475 25.7835 29.2346L15.0115 23.44L15 23.4474V33.854C15 35.2159 16.1193 36.32 17.5 36.32H35.5C36.8807 36.32 38 35.2159 38 33.854V23.4474L37.9885 23.4405L27.2185 29.2346Z"
        fill="var(--primary)"
      />
    </svg>
  );
}

export function ContactPhoneMethodIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="54" height="54" rx="27" fill="var(--accent-60)" />
      <path
        d="M30.3564 29.7045L28.4818 32.0479C25.5784 30.3418 23.1588 27.9225 21.4524 25.0192L23.7954 23.1447C24.3604 22.6928 24.5494 21.9166 24.2554 21.2556L22.1194 16.4465C21.8029 15.7339 21.0172 15.3552 20.2626 15.5515L16.1972 16.6054C15.4118 16.8102 14.9039 17.5703 15.0153 18.3743C16.4819 28.8133 24.6866 37.018 35.1259 38.4848C35.9299 38.5959 36.6898 38.0881 36.8949 37.3029L37.9488 33.2366C38.1444 32.4823 37.7658 31.6971 37.0538 31.3804L32.2456 29.2471C31.585 28.9529 30.8092 29.1408 30.3564 29.7045Z"
        fill="var(--primary)"
      />
    </svg>
  );
}

export function ContactLocationMethodIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="54" height="54" rx="27" fill="var(--accent-60)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 24.3111C19 19.1088 23.0678 16 27 16C30.9322 16 35 19.1088 35 24.3111C35 29.8282 27.6461 37.5316 27.3327 37.8568C27.2447 37.9487 27.1247 38 27 38C26.8753 38 26.7553 37.9487 26.6673 37.8568C26.3539 37.5316 19 29.8282 19 24.3111ZM24.1765 24.3111C24.1765 25.9288 25.4428 27.2444 27 27.2444C28.5572 27.2444 29.8235 25.9288 29.8235 24.3111C29.8235 22.6934 28.5572 21.3778 27 21.3778C25.4428 21.3778 24.1765 22.6934 24.1765 24.3111Z"
        fill="var(--primary)"
      />
    </svg>
  );
}
