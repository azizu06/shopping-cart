const LAUNCHER_URL =
  "https://ll.thespacedevs.com/2.3.0/launcher_configurations/?format=json&limit=100";
const SPACECRAFT_URL =
  "https://ll.thespacedevs.com/2.3.0/spacecraft_configurations/?format=json&limit=100";

function isValidItem(item, type) {
  const origin = type === "launcher" ? "manufacturer" : "agency";
  return (
    item && item.id && item.name && item[origin]?.name && item.image?.image_url
  );
}

function formatItem(item, type) {
  const origin = type === "launcher" ? "manufacturer" : "agency";
  return {
    id: `${type}-${item.id}`,
    type: type,
    name: item.name,
    manufacturer: item[origin].name,
    image: item.image.image_url,
    price: Math.floor(Math.random() * 50000000) + 10000000,
  };
}

async function fetchJson(url) {
  const res = await fetch(url);

  if (!res.ok) {
    const err = new Error(`Request failed: ${res.status} ${res.statusText}`);
    err.status = res.status;
    throw err;
  }

  return res.json();
}

export async function fetchProducts() {
  const [launchersData, spacecraftsData] = await Promise.all([
    fetchJson(LAUNCHER_URL),
    fetchJson(SPACECRAFT_URL),
  ]);

  const launchers = launchersData.results
    .filter((item) => isValidItem(item, "launcher"))
    .slice(0, 15)
    .map((item) => formatItem(item, "launcher"));

  const spacecrafts = spacecraftsData.results
    .filter((item) => isValidItem(item, "spacecraft"))
    .slice(0, 15)
    .map((item) => formatItem(item, "spacecraft"));

  return [...launchers, ...spacecrafts];
}
