"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Technology and Infrastructure", href: "/technology" },
  { label: "Blogs", href: "/blogs" },
  { label: "Platforms", href: "/#platforms" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-zinc-200/80 bg-white">
      <div className="mx-auto w-full max-w-[1254px] px-4 lg:px-0 py-3">
        <div className="flex items-center justify-between rounded-full border border-zinc-200/80 bg-white px-3 py-2 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/brand/logo-full.svg" alt="Sino Africa" width={126} height={24} priority />
          </Link>

          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" || 
                item.href === "/about" || 
                item.href === "/technology" || 
                item.href === "/blogs"
                  ? pathname === item.href
                  : false;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${isActive
                    ? "bg-primary text-zinc-900"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 text-xs text-zinc-600 md:flex">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>sinoafricatrading.com</span>
          </div>
        </div>
      </div>
    </header>
  );
}
