export default function BarChart({ data }: { data: { label: string; value: number }[] }) {
  const max = Math.max(...data.map((d) => d.value)) || 1;

  return (
    <div className="flex h-36 items-end gap-3">
      {data.map((d) => (
        <div key={d.label} className="flex flex-1 flex-col items-center gap-2">
          <div className="flex h-28 w-full flex-col items-center justify-end">
            <span className="mb-1 text-xs font-medium text-neutral-600">{d.value}</span>
            <div
              className="w-full rounded-t bg-rose-500"
              style={{ height: `${(d.value / max) * 100}%` }}
            />
          </div>
          <span className="text-xs text-neutral-400">{d.label}</span>
        </div>
      ))}
    </div>
  );
}
