import { fetchProducts } from "../api/products";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { sortOptions, filterOptions, sortFns, filterFns } from "../const";
import DropDown from "../components/Dropdown";
import ShopItem from "../components/ShopItem";
import { Search } from "lucide-react";

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
      <h1 className="flex justify-center">Space Arsenal</h1>
      <div className="flex justify-between">
        <div className="flex gap-2 border items-center pl-2 no-spinner">
          <Search size={18} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-80 p-2"
            placeholder="Search for products"
          />
        </div>
        <div className="flex gap-16">
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
      <div className="grid grid-cols-3 gap-10">
        {visibleProducts.map((p) => (
          <ShopItem key={p.id} item={p} cart={cart} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
