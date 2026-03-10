import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, Sparkles, AlertTriangle } from "lucide-react";
import { fetchProducts } from "../api/products";
import { CartContext } from "../context/CartContext";
import { sortOptions, filterOptions, sortFns, filterFns } from "../const";
import DropDown from "../components/Dropdown";
import ShopItem from "../components/ShopItem";

const Shop = () => {
  const { cart, setCart } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("default");
  const [sortType, setsortType] = useState("default");

  const addToCart = (id, count) => {
    if (count === 0) {
      setCart((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
      return;
    }
    setCart((prev) => ({
      ...prev,
      [id]: count,
    }));
  };

  const {
    data: products = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 0,
  });

  let visibleProducts = [...products].filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (filterFns[filterType]) {
    visibleProducts = visibleProducts.filter(filterFns[filterType]);
  }

  if (sortFns[sortType]) {
    visibleProducts.sort(sortFns[sortType]);
  }

  if (isPending) {
    return (
      <section className="space-y-6">
        <div className="surface-card rounded-3xl p-8">
          <p className="text-sm uppercase tracking-[0.26em] text-cyan-200/90">
            Catalog Uplink
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">
            Loading Fleet Inventory
          </h1>
          <p className="mt-2 text-slate-300">
            Acquiring launch platforms and spacecraft manifests...
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="surface-card h-80 animate-pulse rounded-2xl"
            />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="surface-card rounded-3xl p-8">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-rose-300/35 bg-rose-400/10 text-rose-200">
          <AlertTriangle size={20} />
        </div>
        <h1 className="mt-4 text-3xl font-semibold text-slate-100">
          Product Feed Unavailable
        </h1>
        <p className="mt-2 max-w-xl text-slate-300">
          We could not retrieve the latest catalog stream. Retry shortly or
          continue with the fallback inventory.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-7">
      <header className="surface-card rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-fuchsia-200/90">
              <Sparkles size={14} />
              Orbital Inventory
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-100 sm:text-4xl">
              Space Arsenal
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
              Discover mission-ready launchers, crew vehicles, and aerospace
              hardware with premium visual detail.
            </p>
          </div>
          <p className="text-sm text-slate-400">
            Showing{" "}
            <span className="font-semibold text-cyan-200">
              {visibleProducts.length}
            </span>{" "}
            items
          </p>
        </div>
      </header>

      <div className="glass-panel relative z-40 flex flex-col gap-4 rounded-2xl p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
        <label className="group flex w-full max-w-xl items-center gap-3 rounded-xl border border-slate-600/55 bg-slate-950/75 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 focus-within:border-cyan-200 focus-within:shadow-[0_0_0_4px_rgba(34,211,238,0.35),0_0_24px_rgba(56,189,248,0.32)]">
          <Search size={18} className="text-slate-400 transition-colors duration-300 group-focus-within:text-cyan-200" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none"
            placeholder="Search by product name"
          />
        </label>

        <div className="flex flex-wrap gap-3">
          <DropDown
            options={filterOptions}
            value={filterType}
            setOption={setFilterType}
          />
          <DropDown
            options={sortOptions}
            value={sortType}
            setOption={setsortType}
          />
        </div>
      </div>

      {visibleProducts.length === 0 ? (
        <div className="surface-card rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-semibold text-slate-100">
            No Matching Hardware
          </h2>
          <p className="mt-2 text-slate-300">
            Try a different search phrase or reset your filter/sort selections.
          </p>
        </div>
      ) : (
        <div className="relative z-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((p) => (
            <ShopItem key={p.id} item={p} cart={cart} addToCart={addToCart} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Shop;
