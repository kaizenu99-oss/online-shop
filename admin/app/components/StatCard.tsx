export default function StatCard({
  label,
  value,
  sublabel,
  icon,
  valueClassName,
}: {
  label: string;
  value: string | number;
  sublabel: string;
  icon: React.ReactNode;
  valueClassName?: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-rose-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-neutral-500">{label}</p>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-rose-600">
          {icon}
        </span>
      </div>
      <p className={`mt-3 text-2xl font-semibold ${valueClassName ?? "text-neutral-900"}`}>{value}</p>
      <p className="mt-1 text-xs text-neutral-400">{sublabel}</p>
    </div>
  );
}
