import Image from "next/image";

const WAVE_SRC = "/images/our-verticals/Wave.png";

type Props = { className?: string };

export function HeroWave({ className = "" }: Props) {
  return (
    <div className={`relative z-[1] -mt-px w-full leading-none ${className}`.trim()}>
      <Image
        src={WAVE_SRC}
        alt=""
        width={1728}
        height={224}
        className="block h-auto w-full"
        sizes="100vw"
      />
    </div>
  );
}
