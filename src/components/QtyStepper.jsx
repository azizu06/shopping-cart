import { Plus, Minus } from "lucide-react";

const QtyStepper = ({ setCount, count, min = 1 }) => {
  const safeCount = Number.isFinite(count) ? count : min;
  const clamp = (rawValue) => {
    if (!Number.isFinite(rawValue)) return min;
    return Math.max(min, rawValue);
  };

  return (
    <div className="glass-panel flex items-center rounded-xl border border-slate-500/45">
      <button
        type="button"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-l-xl text-slate-300 transition hover:bg-slate-100/10 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
        onClick={() => setCount(clamp(safeCount - 1))}
      >
        <Minus size={14} />
      </button>
      <input
        type="number"
        value={safeCount}
        onChange={(e) => setCount(clamp(Number(e.target.value)))}
        className="no-spinner w-14 border-x border-slate-500/40 bg-transparent px-2 py-1 text-center text-sm font-medium text-slate-100 focus:outline-none"
        min={min}
      />
      <button
        type="button"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-r-xl text-slate-300 transition hover:bg-slate-100/10 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
        onClick={() => setCount(clamp(safeCount + 1))}
      >
        <Plus size={14} />
      </button>
    </div>
  );
};

export default QtyStepper;
