import * as React from "react";

type ContactBadgeIconProps = {
  size?: number;
  backgroundColor?: string;
  className?: string;
};

export function ContactBadgeIcon({
  size = 78,
  backgroundColor = "#64C294",
  className,
}: ContactBadgeIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="39" cy="39" r="39" fill={backgroundColor} />
      <path
        d="M49.9565 28H28.0435C26.3626 28 25 29.3228 25 30.9545V33.3181C25 33.5344 25.1216 33.7334 25.3171 33.837L38.7084 40.9278C38.8902 41.0241 39.1098 41.0241 39.2916 40.9278L52.6829 33.837C52.8784 33.7334 53 33.5344 53 33.3181V30.9545C53 29.3228 51.6374 28 49.9565 28Z"
        fill="white"
      />
      <path
        d="M39.8747 42.1983C39.3301 42.4969 38.6723 42.4969 38.1277 42.1983L25.014 35L25 35.0092V47.9366C25 49.6285 26.3626 51 28.0435 51H49.9565C51.6374 51 53 49.6285 53 47.9366V35.0092L52.986 35.0006L39.8747 42.1983Z"
        fill="white"
      />
    </svg>
  );
}

