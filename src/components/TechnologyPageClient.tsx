// "use client";

// import Image from "next/image";

// export function TechnologyPageClient() {
//   return (
//     <div className="flex w-full flex-col">
//       {/* Hero Section */}
//       <section
//         className="relative flex min-h-[800px] w-full items-center overflow-hidden bg-cover bg-center bg-no-repeat lg:min-h-[900px]"
//         style={{ backgroundImage: "url('/assets/images/BG.png')" }}
//       >
//         <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-6 py-24 lg:flex-row lg:px-20 lg:py-32">
//           {/* Text Content */}
//           <div
//             className="flex flex-col gap-[18px]"
//             style={{ width: "100%", maxWidth: "511.6px", minHeight: "230px" }}
//           >
//             <h1
//               className="font-semibold text-[#161C2D]"
//               style={{
//                 fontSize: "48px",
//                 lineHeight: "58px",
//                 letterSpacing: "-1.8px"
//               }}
//             >
//               Technology and Infrastructure
//             </h1>
//             <p
//               className="font-normal text-[#676D80]"
//               style={{
//                 fontSize: "19px",
//                 lineHeight: "32px",
//                 letterSpacing: "-0.2px"
//               }}
//             >
//               Lorem ipsum dolor sit amet consectetur. Nunc nec dolor sed justo.
//               Sodales bibendum vitae pellentesque consectetur adipiscing sit.
//               Pretium sit elementum sagittis cursus. Sed.
//             </p>
//           </div>

//           <div className="relative flex flex-1 items-center justify-center lg:justify-end">
//             {/* 
//               FIX 1: Swapped Width and Height to match Figma (Landscape, not Portrait)
//               FIX 2: Added "lg:-translate-x-8 lg:translate-y-4" to nudge the image.
//                      Tweak these numbers (e.g., -translate-x-12, translate-y-2) until 
//                      it sits perfectly inside the green box on your screen!
//             */}
//             <div
//               className="relative overflow-hidden rounded-[20px] shadow-sm lg:translate-x-22 lg:translate-y-12"
//               style={{ width: "495.51px", height: "429px" }}
//             >
//               <Image
//                 src="/assets/images/infrahero-img.png"
//                 alt="Technology and Infrastructure Hero"
//                 width={496}
//                 height={429}
//                 className="h-full w-full object-cover"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }