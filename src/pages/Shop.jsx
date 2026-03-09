import { fetchProducts } from "../api/products";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
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
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 0) + count,
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
  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  let visibleProducts = [...products].filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );
  if (filterFns[filterType]) {
    visibleProducts = visibleProducts.filter(filterFns[filterType]);
  }
  if (sortFns[sortType]) visibleProducts.sort(sortFns[sortType]);

  return (
    <div className="flex flex-col gap-5">
      <h1>Space Arsenal</h1>
      <div className="flex justify-between">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-4">
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
      <div className="grid grid-cols-3 gap-5">
        {visibleProducts.map((p) => (
          <ShopItem key={p.id} item={p} cart={cart} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
