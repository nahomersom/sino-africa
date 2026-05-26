"use client";

import { useEffect, useState } from "react";

interface SharingSidebarProps {
  title?: string;
}

export function SharingSidebar({ title }: SharingSidebarProps) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleShare = (platform: string) => {
    if (!currentUrl) return;

    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(title || "Read this amazing blog!");

    let shareUrl = "";

    switch (platform) {
      case "LinkedIn":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case "X":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case "Facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "Threads":
        shareUrl = `https://www.threads.net/intent/post?text=${encodedTitle}%20${encodedUrl}`;
        break;
      case "Instagram":
        navigator.clipboard.writeText(currentUrl).then(() => {
          alert("Link copied to clipboard!");
        });
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  const handleShareIconClick = () => {
    if (!currentUrl) return;
    if (navigator.share) {
      navigator.share({ title, url: currentUrl }).catch(console.error);
    } else {
      navigator.clipboard.writeText(currentUrl).then(() => alert("Link copied to clipboard!"));
    }
  };

  const socialIcons = [
    {
      label: "LinkedIn",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      label: "X",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.134l4.713 6.231 5.397-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
      )
    },
    {
      label: "Facebook",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      label: "Instagram",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    },
    {
      label: "Threads",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M17.6921 11.1235C17.5887 11.074 17.4837 11.0263 17.3774 10.9806C17.1921 7.56728 15.327 5.61312 12.1952 5.59312C12.181 5.59304 12.1669 5.59304 12.1528 5.59304C10.2795 5.59304 8.72164 6.39261 7.76275 7.84759L9.48512 9.0291C10.2014 7.94229 11.3257 7.7106 12.1536 7.7106C12.1631 7.7106 12.1727 7.7106 12.1822 7.71069C13.2134 7.71726 13.9915 8.01708 14.4951 8.60175C14.8616 9.02741 15.1067 9.61563 15.2281 10.358C14.3139 10.2026 13.3251 10.1548 12.2681 10.2154C9.29059 10.3869 7.37639 12.1235 7.50495 14.5365C7.57019 15.7605 8.17996 16.8135 9.22188 17.5014C10.1028 18.0829 11.2374 18.3673 12.4165 18.3029C13.9738 18.2175 15.1954 17.6234 16.0476 16.537C16.6949 15.712 17.1042 14.6429 17.285 13.2957C18.0271 13.7436 18.5771 14.333 18.8809 15.0415C19.3974 16.2459 19.4275 18.225 17.8126 19.8385C16.3978 21.252 14.697 21.8635 12.1267 21.8824C9.27552 21.8612 7.11922 20.9469 5.71726 19.1646C4.40444 17.4958 3.72596 15.0852 3.70065 12C3.72596 8.91473 4.40444 6.5042 5.71726 4.83534C7.11922 3.05311 9.27549 2.13875 12.1266 2.11756C14.9985 2.13891 17.1924 3.05767 18.648 4.8485C19.3618 5.7267 19.8999 6.8311 20.2546 8.11879L22.273 7.58028C21.843 5.99528 21.1664 4.62946 20.2456 3.49675C18.3795 1.20084 15.6503 0.0243935 12.1337 0H12.1196C8.6102 0.0243088 5.91151 1.20522 4.09854 3.50991C2.48524 5.5608 1.65305 8.41446 1.62509 11.9916L1.625 12L1.62509 12.0084C1.65305 15.5855 2.48524 18.4393 4.09854 20.4901C5.91151 22.7948 8.6102 23.9757 12.1196 24H12.1337C15.2538 23.9784 17.453 23.1615 19.2647 21.3514C21.6351 18.9832 21.5637 16.0149 20.7825 14.1926C20.222 12.8859 19.1534 11.8245 17.6921 11.1235ZM12.3051 16.1884C11.0001 16.2619 9.6443 15.6761 9.57745 14.4215C9.5279 13.4913 10.2395 12.4532 12.3851 12.3296C12.6309 12.3154 12.872 12.3085 13.1089 12.3085C13.8883 12.3085 14.6174 12.3842 15.2802 12.5291C15.033 15.6169 13.5828 16.1182 12.3051 16.1884Z" />
        </svg>
      )
    },
  ];
  return (
    <aside className="w-full md:max-w-[677px] lg:max-w-none lg:w-[343px] shrink-0 lg:h-fit lg:self-start z-0 mt-6 md:mt-0">
      <div
        className="rounded-[24px] p-8 flex flex-col md:justify-between gap-6 text-white overflow-hidden relative group shadow-xl md:h-[282px] lg:h-[282px] lg:w-[343px]"
        style={{
          background: "linear-gradient(180deg, #64C294 0%, #2F5C46 100%)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
        }}
      >
        {/* Top Header Icons */}
        <div className="flex justify-between items-start w-full relative z-10">
          {/* Company Logo Icon */}
          <div className="">
            <svg width="28" height="28" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.663453 16.9942L6.54719 13.0969C9.266 11.2997 10.3883 10.7104 12.5319 10.7104C14.6755 10.7104 15.7978 11.2997 18.5166 13.0969L24.4003 16.9942C24.624 17.1425 24.8439 17.2946 25.0637 17.4467L25.0637 12.5319C25.0637 5.61025 19.4536 6.2164e-05 12.5319 6.20279e-05C5.61024 6.17107e-05 5.01487e-05 5.61025 5.04733e-05 12.5319L4.74061e-05 17.4467C0.219904 17.2946 0.439761 17.1425 0.663453 16.9942Z" fill="white" />
              <path d="M25.0638 19.9892C21.3926 17.811 17.1093 16.5558 12.5319 16.5545C7.95453 16.5545 3.67115 17.811 5.06261e-05 19.9892L4.90487e-05 24.803L25.0637 24.803L25.0638 19.9892Z" fill="white" />
            </svg>
          </div>

          {/* Share Icon */}
          <div 
            onClick={handleShareIconClick}
            className="cursor-pointer"
          >
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.5833 27.0832C39.5833 36.288 32.1215 43.7498 22.9167 43.7498C13.7119 43.7498 6.25 36.288 6.25 27.0832C6.25 17.8784 13.7119 10.4165 22.9167 10.4165" stroke="white" strokeWidth="3.125" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M29.167 6.25H37.5003C40.4466 6.25 41.9197 6.25 42.8351 7.16529C43.7503 8.08058 43.7503 9.55373 43.7503 12.5V20.8333M41.667 8.33333L22.917 27.0833" stroke="white" strokeWidth="3.125" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Content Section (Bottom in Tablet) */}
        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold leading-tight">
              Like What you read?
            </h3>
            <p className="text-sm font-medium opacity-70">
              Consider Sharing this Blog
            </p>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-[6px] lg:w-full md:h-10">
            {socialIcons.map((social, index) => (
              <button
                key={index}
                onClick={() => handleShare(social.label)}
                className="w-11 h-11 md:w-auto md:h-10 md:flex-1 rounded-lg bg-white/30 flex items-center justify-center hover:bg-white/20 transition-all hover:-translate-y-1 backdrop-blur-sm"
                aria-label={social.label}
              >
                {social.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}