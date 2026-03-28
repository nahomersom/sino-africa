import Image from "next/image";

type TeamMember = {
  readonly name: string;
  readonly role: string;
  readonly image: string;
};

type TeamSectionProps = {
  heading: string;
  description: string;
  ceo: TeamMember;
  managers: readonly TeamMember[];
  staff: readonly TeamMember[];
};

export function TeamSection({
  heading,
  description,
  ceo,
  managers,
  staff,
}: TeamSectionProps) {
  const staffRow1 = staff.slice(0, 5);
  const staffRow2 = staff.slice(5, 10);

  return (
    <section className="relative flex w-full flex-col items-center gap-12 overflow-hidden bg-surface px-6 py-20 md:gap-12 md:px-20 md:py-10 lg:gap-12 lg:px-[296px] lg:py-[152px]">
      {/* Decorative dot pattern — top-left */}
      <div className="pointer-events-none absolute -left-[60px] top-[56px] hidden select-none md:block">
        <Image
          src="/images/about/team/team-pattern.svg"
          alt=""
          aria-hidden="true"
          width={120}
          height={123}
        />
      </div>

      {/* Decorative corner icon — bottom-right */}
      <div className="pointer-events-none absolute bottom-[115px] -right-20 hidden select-none lg:block">
        <Image
          src="/images/about/team/team-corner-icon.svg"
          alt=""
          aria-hidden="true"
          width={166.54}
          height={64.11}
          className="h-[100.11px]! w-[166.54px]!"
        />
      </div>

      {/* Title block */}
      <div className="relative z-10 flex max-w-[552px] flex-col items-center gap-4">
        <h2 className="max-w-[455px] text-center text-[36px] font-normal leading-[1.5] tracking-[-0.033em] text-text-100">
          {heading}
        </h2>
        <p className="max-w-[410px] text-center text-lg leading-[1.778] tracking-[-0.011em] text-text-100/70">
          {description}
        </p>
      </div>

      {/* Team content */}
      <div className="relative z-10 flex w-full flex-col items-center gap-10">
        {/* CEO card */}
        <div className="flex w-full max-w-[734px] gap-1.5 rounded-2xl bg-white p-4 md:max-w-none lg:max-w-[734px]">
          <div className="relative min-w-[245px] shrink-0 overflow-hidden rounded-2xl bg-[#E2E3E7] min-h-[287px]">
            <Image
              src={ceo.image}
              alt={ceo.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col justify-end gap-1.5 rounded-[32px] px-4 py-6">
            <h3 className="text-[40px] font-normal leading-[1.5] text-text-100 md:text-[32px] lg:text-[40px]">
              {ceo.name}
            </h3>
            <p className="text-base leading-[1.5] text-muted">{ceo.role}</p>
            <Image
              src="/images/about/team/social-icons.svg"
              alt="Social links"
              width={86}
              height={40}
            />
          </div>
        </div>

        {/* Managers heading */}
        <h4 className="w-full max-w-[700px] text-center text-[28px] font-normal leading-[1.5] tracking-[-0.043em] text-text-100">
          Managers
        </h4>

        {/* Managers row */}
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:w-full">
          {managers.map((member) => (
            <div
              key={member.name}
              className="relative flex h-[333px] w-[266px] shrink-0 flex-col justify-end overflow-hidden rounded-lg p-4 md:w-auto md:flex-1 md:shrink"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 61%, rgba(0,0,0,1) 100%)",
                }}
              />
              <div className="relative z-10">
                <h5 className="text-base font-semibold leading-[1.5] text-white">
                  {member.name}
                </h5>
                <p className="text-xs leading-[1.5] text-white/70">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Staff heading */}
        <h4 className="w-full max-w-[700px] text-center text-[28px] font-normal leading-[1.5] tracking-[-0.043em] text-text-100">
          Staff
        </h4>

        {/* Staff grid */}
        <div className="flex w-full flex-col gap-4 md:grid md:grid-cols-3 md:gap-4 lg:flex lg:flex-col lg:h-[528px]">
          {[staffRow1, staffRow2].map((row, rowIdx) => (
            <div key={rowIdx} className="flex w-full flex-1 gap-4 md:contents lg:flex lg:w-full lg:flex-1 lg:gap-4">
              {row.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-1 flex-col justify-end gap-[6px] overflow-hidden rounded-2xl"
                >
                  <div className="relative min-h-[140px] flex-1 overflow-hidden rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col px-2 pb-2">
                    <span className="font-(family-name:--font-nata-sans) text-sm font-medium leading-[1.5] text-text-100">
                      {member.name}
                    </span>
                    <span className="font-(family-name:--font-nata-sans) text-xs leading-[1.5] text-muted">
                      {member.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
