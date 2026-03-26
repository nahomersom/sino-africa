import { Button } from "@/src/components/ui/app-button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black/40 flex items-between justify-center">
      <Image
        src="/images/hero-background.jpg"
        alt="Sino Africa hero background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="z-10 flex flex-col items-center justify-center gap-4  max-w-[574px]">
      <span className="text-[13px] text-primary ">SINO AFRICA</span>
      <h1 className="text-[100px] leading-[100px] text-white tracking-[-2px]">Sino Africa</h1>
      <p className="text-center text-2xl font-normal leading-[150%] tracking-[-1px] text-white">Building scalable infrastructure systems across Africa through partnerships, technology, and institutional capital.</p>
     <div className="space-x-4">
        <Button asChild variant="primary" className="min-w-[187px]">
              <Link href="/#contact">Explore Our Platforms</Link>
            </Button>
            <Button asChild variant="secondary" className="min-w-[187px]">
              <Link href="/#contact">Contact us</Link>
            </Button>
     </div>
      </div>
      <Image
        src="/icons/down-arrow.svg"
        alt="Scroll down"
        width={24}
        height={24}
        className="absolute bottom-[7px] left-1/2 z-10 -translate-x-1/2 size-10"
      />
    </section>
  );
}
