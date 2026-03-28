"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/app-button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Our Verticals", href: "/our-verticals" },
  { label: "Projects", href: "/#contact" },
  { label: "Technology and Infrastructure", href: "/#contact" },
  { label: "Blogs", href: "/#contact" },
];

type NavVariant = "default" | "inner-page";

type NavProps = {
  variant?: NavVariant;
  className?: string;
};

export function Nav({ variant = "default", className = "" }: NavProps) {
  const pathname = usePathname();

  return (
    <header className={`fixed inset-x-0 top-0 z-30 w-full ${className}`}>
      <div className="mx-auto w-full max-w-[1252px] px-4 pt-8">
        <div
          className={`flex items-center justify-between rounded-[32px] bg-white/80 p-4 backdrop-blur-[32px] ${
            variant === "default"
              ? "shadow-[0_8px_30px_rgba(15,23,42,0.2)]"
              : "shadow-[0_4px_20px_rgba(15,23,42,0.08)]"
          }`}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/brand/logo.svg"
              alt="Sino Africa"
              width={142.5}
              height={53.8}
              priority
            />
          </Link>

          <nav className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" || item.href === "/about" || item.href === "/our-verticals"
                  ? pathname === item.href
                  : false;

              return (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  className={`px-2 py-3 text-sm transition-colors ${
                    isActive
                      ? "font-medium text-primary"
                      : "font-normal text-text-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Button asChild variant="primary" className="min-w-[142px]">
            <Link href="/#contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
