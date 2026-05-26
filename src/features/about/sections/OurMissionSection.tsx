"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type OurMissionSectionProps = {
  heading: string;
  description: string;
};

export function OurMissionSection({
  heading,
  description,
}: OurMissionSectionProps) {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-white px-8 py-20 md:px-20 md:py-24 lg:px-[120px] lg:py-[110px] xl:px-[240px]">
      {/* Face-icon background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: "url('/images/sino-symbol-tile.svg')",
          backgroundSize: "20px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Gradient glows — match ContactSection treatment */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[88px] hidden h-[489px] w-[489px] rounded-full bg-[#64C294]/20 blur-[252px] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[605px] w-[605px] -translate-y-1/2 rounded-full bg-[#64C294]/20 blur-[252px] lg:block"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center justify-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-10">
        {/* Content */}
        <motion.div
          className="order-2 flex w-full flex-col items-center gap-[24px] text-center lg:order-0 lg:w-auto lg:items-start lg:gap-[30px] lg:text-left"
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.4995 24.375C32.8586 24.375 33.2031 24.2323 33.457 23.9784C33.711 23.7244 33.8537 23.38 33.8537 23.0208C33.8537 22.6617 33.711 22.3173 33.457 22.0633C33.2031 21.8093 32.8586 21.6667 32.4995 21.6667C30.3569 21.6667 28.2623 22.302 26.4808 23.4924C24.6993 24.6828 23.3107 26.3747 22.4908 28.3543C21.6708 30.3338 21.4563 32.512 21.8743 34.6135C22.2923 36.715 23.3241 38.6453 24.8392 40.1603C26.3542 41.6754 28.2846 42.7072 30.386 43.1252C32.4875 43.5432 34.6657 43.3287 36.6452 42.5087C38.6248 41.6888 40.3167 40.3002 41.5071 38.5187C42.6975 36.7372 43.3328 34.6426 43.3328 32.5C43.3328 32.1409 43.1902 31.7964 42.9362 31.5425C42.6822 31.2885 42.3378 31.1458 41.9787 31.1458C41.6195 31.1458 41.2751 31.2885 41.0211 31.5425C40.7672 31.7964 40.6245 32.1409 40.6245 32.5C40.6245 34.107 40.148 35.6779 39.2552 37.014C38.3624 38.3502 37.0934 39.3916 35.6088 40.0065C34.1241 40.6215 32.4905 40.7824 30.9144 40.4689C29.3383 40.1554 27.8906 39.3816 26.7542 38.2453C25.6179 37.109 24.8441 35.6612 24.5306 34.0851C24.2171 32.509 24.378 30.8754 24.993 29.3907C25.6079 27.9061 26.6493 26.6371 27.9855 25.7443C29.3216 24.8515 30.8925 24.375 32.4995 24.375Z" fill="#161C2D"/>
            <path d="M58.337 24.4569C58.2253 24.1193 57.9854 23.8391 57.6689 23.6768C57.3525 23.5145 56.985 23.483 56.6456 23.5892C56.3062 23.6954 56.0222 23.9308 55.8547 24.2445C55.6873 24.5583 55.6499 24.9253 55.7505 25.2663C57.3914 30.4914 57.2323 36.1159 55.2987 41.2398C53.3651 46.3638 49.7688 50.6912 45.0851 53.5296C40.4014 56.3681 34.901 57.5535 29.4639 56.8964C24.0268 56.2393 18.9672 53.7775 15.0946 49.9049C11.222 46.0323 8.76026 40.9727 8.10311 35.5356C7.44597 30.0985 8.63145 24.5981 11.4699 19.9144C14.3083 15.2307 18.6357 11.6344 23.7597 9.70082C28.8837 7.76723 34.5081 7.60813 39.7332 9.24897C40.0749 9.35199 40.4435 9.31605 40.7589 9.14894C41.0743 8.98184 41.311 8.69706 41.4177 8.35646C41.5243 8.01585 41.4923 7.64691 41.3286 7.32976C41.1649 7.0126 40.8827 6.77283 40.5432 6.66251C34.7419 4.84241 28.4977 5.02048 22.8095 7.16825C17.1214 9.31602 12.3178 13.3094 9.1672 18.5096C6.01661 23.7098 4.70104 29.8164 5.43092 35.8526C6.16079 41.8888 8.89394 47.5059 13.1932 51.8053C17.4924 56.1047 23.1094 58.8381 29.1455 59.5682C35.1817 60.2983 41.2884 58.9829 46.4887 55.8325C51.689 52.6821 55.6826 47.8787 57.8306 42.1906C59.9786 36.5025 60.1569 30.2584 58.337 24.4569Z" fill="#161C2D"/>
            <path d="M35.0782 15.0837C35.0817 14.7121 34.9437 14.3531 34.6922 14.0795C34.4407 13.806 34.0946 13.6383 33.7241 13.6105C33.3194 13.5761 32.9147 13.5417 32.4995 13.5417C28.7499 13.5417 25.0845 14.6536 21.9668 16.7367C18.8491 18.8199 16.4192 21.7808 14.9843 25.245C13.5494 28.7092 13.1739 32.521 13.9054 36.1986C14.6369 39.8762 16.4426 43.2542 19.0939 45.9056C21.7453 48.5569 25.1234 50.3626 28.8009 51.0941C32.4785 51.8256 36.2903 51.4501 39.7545 50.0152C43.2187 48.5803 46.1796 46.1504 48.2628 43.0327C50.3459 39.915 51.4578 36.2496 51.4578 32.5C51.4578 32.0102 51.4278 31.5209 51.3679 31.0348C51.3417 30.8545 51.2794 30.6813 51.185 30.5256C51.0905 30.3698 50.9657 30.2346 50.8179 30.128C50.6702 30.0213 50.5026 29.9455 50.3249 29.9049C50.1473 29.8644 49.9634 29.8599 49.784 29.8918C49.6046 29.9237 49.4335 29.9913 49.2807 30.0906C49.128 30.1899 48.9968 30.3189 48.8949 30.4699C48.7929 30.621 48.7224 30.7909 48.6874 30.9697C48.6524 31.1485 48.6537 31.3325 48.6913 31.5108C48.7204 31.8388 48.7495 32.1642 48.7495 32.4993C48.7496 35.7133 47.7967 38.8552 46.0112 41.5275C44.2257 44.1999 41.6879 46.2828 38.7186 47.5129C35.7493 48.7429 32.4819 49.0648 29.3297 48.4379C26.1775 47.8109 23.2819 46.2633 21.0092 43.9907C18.7366 41.7182 17.1888 38.8227 16.5618 35.6705C15.9347 32.5183 16.2565 29.2509 17.4864 26.2816C18.7163 23.3122 20.7991 20.7743 23.4714 18.9887C26.1437 17.2031 29.2855 16.25 32.4995 16.25C32.8353 16.25 33.1607 16.2791 33.488 16.3082L33.7419 16.3294C33.9118 16.3366 34.0814 16.31 34.2408 16.2511C34.4003 16.1922 34.5465 16.1021 34.6708 15.9862C34.7952 15.8703 34.8952 15.7308 34.9652 15.5758C35.0351 15.4209 35.0735 15.2536 35.0782 15.0837Z" fill="#161C2D"/>
            <path d="M40.6245 17.6042V22.4601L31.5421 31.5426C31.4128 31.6675 31.3096 31.817 31.2386 31.9822C31.1677 32.1474 31.1303 32.3251 31.1287 32.5049C31.1272 32.6847 31.1614 32.863 31.2295 33.0294C31.2976 33.1959 31.3982 33.347 31.5253 33.4742C31.6525 33.6013 31.8037 33.7019 31.9701 33.77C32.1365 33.8381 32.3148 33.8723 32.4946 33.8708C32.6744 33.8692 32.8521 33.8318 33.0173 33.7609C33.1825 33.6899 33.332 33.5867 33.4569 33.4574L42.5394 24.375H47.3953C47.5732 24.375 47.7492 24.34 47.9135 24.2719C48.0778 24.2038 48.227 24.104 48.3527 23.9782L56.4777 15.8532C56.667 15.6639 56.796 15.4226 56.8482 15.16C56.9004 14.8973 56.8736 14.6251 56.7711 14.3777C56.6687 14.1303 56.4951 13.9188 56.2725 13.77C56.0499 13.6212 55.7881 13.5417 55.5203 13.5417H51.4578V9.47918C51.4578 9.21139 51.3783 8.94963 51.2295 8.727C51.0807 8.50436 50.8692 8.33083 50.6218 8.22836C50.3744 8.1259 50.1022 8.09908 49.8396 8.1513C49.5769 8.20353 49.3356 8.33246 49.1463 8.52178L41.0213 16.6468C40.8955 16.7725 40.7957 16.9217 40.7276 17.086C40.6595 17.2503 40.6245 17.4264 40.6245 17.6042ZM43.3328 18.1649L48.7495 12.7483V14.8958C48.7495 15.255 48.8922 15.5994 49.1461 15.8534C49.4001 16.1073 49.7445 16.25 50.1037 16.25H52.2512L46.8346 21.6667H43.3328V18.1649Z" fill="#161C2D"/>
            </svg>
          </motion.div>
          <motion.h2
            className="text-[32px] font-medium leading-tight text-text-100 md:text-[40px]"
            initial={{ opacity: 0, y: 14, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.34 }}
          >
            {heading}
          </motion.h2>
          <motion.p
            className="max-w-[492px] text-base leading-7 text-text-100/80 md:text-lg md:leading-8"
            initial={{ opacity: 0, y: 14, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.48 }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Image with decorative accents */}
        <motion.div
          className="order-1 w-full lg:order-0 lg:w-[498px] lg:shrink-0"
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
        >
          <div className="relative mx-auto w-full max-w-[498px]">
            {/* Dots accent — top right, behind image */}
            <Image
              src="/images/dots-circle.svg"
              alt=""
              aria-hidden="true"
              width={140}
              height={140}
              className="pointer-events-none absolute -right-4 -top-10 z-0 h-auto w-[80px] select-none md:-right-12 md:-top-20 md:w-[140px]"
            />

            {/* Coral circle accent — bottom right, behind image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-6 z-0 h-[130px] w-[130px] rounded-full bg-[#F64B4B]/57 md:-bottom-20 md:-right-20 md:h-[221px] md:w-[221px]"
            />

            <div className="relative z-10 h-[320px] w-full overflow-hidden rounded-[16px] shadow-[0_24px_48px_rgba(0,0,0,0.12)] md:h-[480px] lg:h-[659px] lg:w-[498px]">
              <Image
                src="assets/images/mission-bg.png"
                alt="Hands stacked together on a tree branch"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 498px, 100vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
