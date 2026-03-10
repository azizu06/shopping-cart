import { Plus, Minus } from "lucide-react";

const QtyStepper = ({ setCount, count, id }) => {
  return (
    <>
      <div className="flex items-center border">
        <button
          type="button"
          className="flex h-8 w-8 shrink-0 items-center justify-center"
          onClick={() => setCount(id, (c) => Math.max(1, c - 1))}
        >
          <Minus size={16} />
        </button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(id, Number(e.target.value))}
          className="no-spinner w-16 flex-none border-x text-center"
          min="1"
        />
        <button
          type="button"
          className="flex h-8 w-8 shrink-0 items-center justify-center"
          onClick={() => setCount(id, (c) => c + 1)}
        >
          <Plus size={16} />
        </button>
      </div>
    </>
  );
};

export default QtyStepper;
