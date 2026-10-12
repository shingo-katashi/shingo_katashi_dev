export function SectionHeading({
  id,
  children,
  index,
}: {
  id: string;
  children: React.ReactNode;
  index?: string;
}) {
  return (
    <div className="mb-10 flex items-center gap-4 sm:mb-12">
      {index ? (
        <span
          className="shrink-0 font-mono text-sm font-medium text-teal-400"
          aria-hidden="true"
        >
          {index}
        </span>
      ) : null}
      <h2
        id={id}
        className="shrink-0 text-xl font-semibold tracking-tight text-slate-100 sm:text-2xl"
      >
        {children}
      </h2>
      <span
        className="hidden h-px min-w-[2rem] flex-1 bg-gradient-to-r from-slate-700 to-transparent sm:block"
        aria-hidden="true"
      />
    </div>
  );
}
