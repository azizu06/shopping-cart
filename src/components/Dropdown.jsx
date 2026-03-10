import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const DropDown = ({ options, value, setOption }) => {
  const [open, setOpen] = useState(false);
  const selected = options.find((opt) => opt.value === value);

  return (
    <div className="relative">
      <div className="flex justify-between" onClick={() => setOpen(!open)}>
        <button>{selected?.label || "Select an Option"}</button>
        {open ? <ChevronUp /> : <ChevronDown />}
      </div>
      {open && (
        <div className="flex flex-col absolute bg-gray-900">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setOption(opt.value)}
              className="flex justify-center p-2"
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
