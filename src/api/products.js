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

export async function fetchProducts() {
  const [launcherRaw, spacecraftRaw] = await Promise.all([
    fetch(LAUNCHER_URL),
    fetch(SPACECRAFT_URL),
  ]);
  const launchersData = await launcherRaw.json();
  const spacecraftsData = await spacecraftRaw.json();

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
