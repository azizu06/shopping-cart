import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const DropDown = ({ options, value, setOption }) => {
  const [open, setOpen] = useState(false);
  const selected = options.find((opt) => opt.value === value);

  return (
    <div className="relative z-50 w-44">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl border border-slate-500/60 bg-slate-950/88 px-3 py-2 text-sm text-slate-100 shadow-[0_12px_30px_rgba(2,6,23,0.45)] transition duration-300 hover:border-cyan-300/50 hover:bg-slate-900/95"
      >
        <span className="truncate">{selected?.label || "Select an Option"}</span>
        {open ? <ChevronUp size={16} className="text-slate-300" /> : <ChevronDown size={16} className="text-slate-300" />}
      </button>
      {open && (
        <div className="absolute z-[60] mt-2 flex w-full flex-col overflow-hidden rounded-xl border border-slate-500/60 bg-slate-950/95 py-1 shadow-[0_18px_42px_rgba(2,6,23,0.68)] backdrop-blur-md">
          {options.map((opt) => (
            <button
              type="button"
              key={opt.value}
              onClick={() => {
                setOption(opt.value);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm transition ${
                opt.value === value
                  ? "bg-cyan-300/30 font-medium text-cyan-50"
                  : "text-slate-100 hover:bg-slate-800/85 hover:text-cyan-100"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
