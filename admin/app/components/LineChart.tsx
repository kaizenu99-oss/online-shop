export default function LineChart({
  data,
  labels,
  axisLabel,
  selectedIndex,
  onSelect,
}: {
  data: number[];
  labels: string[];
  axisLabel?: string;
  selectedIndex?: number;
  onSelect?: (index: number) => void;
}) {
  const width = 320;
  const height = 140;
  const padding = 10;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((value, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - ((value - min) / range) * (height - padding * 2);
    return [x, y] as const;
  });

  const path = smoothPath(points);
  const last = points[points.length - 1];
  const first = points[0];
  const areaPath = `${path} L${last[0]},${height - padding} L${first[0]},${height - padding} Z`;

  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
        <defs>
          <linearGradient id="salesTrendGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#2dd4bf" stopOpacity={0} />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#salesTrendGradient)" />
        <path d={path} fill="none" stroke="#14b8a6" strokeWidth={2.5} strokeLinecap="round" />
        {points.map(([x, y], i) => {
          const isSelected = i === selectedIndex;
          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r={10}
                fill="transparent"
                className={onSelect ? "cursor-pointer" : ""}
                onClick={() => onSelect?.(i)}
              />
              <circle
                cx={x}
                cy={y}
                r={isSelected ? 6 : 4}
                fill="#14b8a6"
                stroke={isSelected ? "#0f766e" : "none"}
                strokeWidth={isSelected ? 2 : 0}
                className="pointer-events-none transition-all"
              />
            </g>
          );
        })}
      </svg>
      {axisLabel && <p className="mt-2 text-xs text-neutral-400">{axisLabel}</p>}
      <div className="mt-1 flex justify-between text-xs">
        {labels.map((label, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelect?.(i)}
            className={`${onSelect ? "cursor-pointer" : ""} ${
              i === selectedIndex ? "font-semibold text-teal-600" : "text-neutral-400"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function smoothPath(points: readonly (readonly [number, number])[]) {
  if (points.length < 2) return "";

  let path = `M${points[0][0]},${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const [x0, y0] = points[i];
    const [x1, y1] = points[i + 1];
    const cx = (x0 + x1) / 2;
    path += ` C${cx},${y0} ${cx},${y1} ${x1},${y1}`;
  }
  return path;
}
