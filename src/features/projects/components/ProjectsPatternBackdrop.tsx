export function ProjectsPatternBackdrop() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-surface" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.8]"
        style={{
          backgroundImage: "url(/images/projects/featured-watermark.svg)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />
    </>
  );
}
