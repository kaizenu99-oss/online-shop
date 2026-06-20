const LABELS = { pending: "Хүлээгдэж буй", shipped: "Хүргэгдсэн", completed: "Дууссан" };
const COLORS = {
  pending: "bg-amber-50 text-amber-700",
  shipped: "bg-sky-50 text-sky-700",
  completed: "bg-emerald-50 text-emerald-700",
};

export default function StatusBadge({ status }: { status: "pending" | "shipped" | "completed" }) {
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${COLORS[status]}`}>
      {LABELS[status]}
    </span>
  );
}
