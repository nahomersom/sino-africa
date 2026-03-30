import Image from "next/image";

const CONTACT_BG_SRC = "/images/our-verticals/contact-bg.png";

const IMG_SIZE = 847;

const imgClass = "size-[847px] max-w-none object-cover opacity-100";

export function ContactSectionSideBackgrounds() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 z-0 hidden size-[847px] -translate-x-1/2 -translate-y-1/2 lg:block"
      >
        <Image
          src={CONTACT_BG_SRC}
          alt=""
          width={IMG_SIZE}
          height={IMG_SIZE}
          sizes="847px"
          className={`${imgClass} scale-x-[-1] object-right`}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 z-0 hidden size-[847px] translate-x-1/2 -translate-y-1/2 lg:block"
      >
        <Image
          src={CONTACT_BG_SRC}
          alt=""
          width={IMG_SIZE}
          height={IMG_SIZE}
          sizes="847px"
          className={`${imgClass} object-left`}
        />
      </div>
    </>
  );
}
