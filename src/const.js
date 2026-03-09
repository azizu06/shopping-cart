export const sortFns = {
  priceAsc: (a, b) => a.price - b.price,
  priceDesc: (a, b) => b.price - a.price,
  nameAsc: (a, b) => a.name.localeCompare(b.name),
  nameDesc: (a, b) => b.name.localeCompare(a.name),
};

export const sortOptions = [
  {
    label: "Reccomended",
    value: "default",
  },
  {
    label: "Price: Low to High",
    value: "priceAsc",
  },
  {
    label: "Price: High to Low",
    value: "priceDesc",
  },
  {
    label: "Alphabetical: A-Z",
    value: "nameAsc",
  },
  {
    label: "Alphabetical: Z-A",
    value: "nameDesc",
  },
];

export const filterFns = {
  launchers: (p) => p.type === "launcher",
  spacecrafts: (p) => p.type === "spacecraft",
};

export const filterOptions = [
  {
    label: "All",
    value: "default",
  },
  {
    label: "Launcher",
    value: "launchers",
  },
  {
    label: "Spacecraft",
    value: "spacecrafts",
  },
];
