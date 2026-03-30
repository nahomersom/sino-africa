type Props = { className?: string };

/** Simple bridge / arch mark for vertical hero headers. */
export function BridgeGlyph({ className = "" }: Props) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 36V22c0-6 5.5-11 16-11s16 5 16 11v14"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M14 36V26c2.2-2.8 5.8-4.5 10-4.5s7.8 1.7 10 4.5v10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path d="M6 36h36" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
