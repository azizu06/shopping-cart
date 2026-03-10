import { Plus, Minus } from "lucide-react";

const QtyStepper = ({ setCount, count, min }) => {
  return (
    <>
      <div className="flex items-center border">
        <button
          type="button"
          className="flex h-8 w-8 shrink-0 items-center justify-center"
          onClick={() => setCount(Math.max(min, count - 1))}
        >
          <Minus size={16} />
        </button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Math.max(min, Number(e.target.value)))}
          className="no-spinner w-16 flex-none border-x text-center"
        />
        <button
          type="button"
          className="flex h-8 w-8 shrink-0 items-center justify-center"
          onClick={() => setCount(count + 1)}
        >
          <Plus size={16} />
        </button>
      </div>
    </>
  );
};

export default QtyStepper;
