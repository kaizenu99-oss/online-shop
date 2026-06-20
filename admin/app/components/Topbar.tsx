export default function Topbar({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-rose-100 bg-white px-6 py-4">
      <h1 className="shrink-0 font-serif text-xl text-rose-700">{title}</h1>

      <div className="hidden max-w-sm flex-1 items-center gap-2 rounded-full border border-rose-200 px-4 py-2 sm:flex">
        <SearchIcon />
        <input
          type="text"
          placeholder="Хайх..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Мэдэгдэл"
          className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 hover:bg-rose-50"
        >
          <BellIcon />
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-700">
          A
        </div>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}
