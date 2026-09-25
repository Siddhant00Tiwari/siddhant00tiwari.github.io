export async function loadCredly() {
  try {
    const res = await fetch("/assets/data/badges.json", { cache: "no-cache" });
    if (!res.ok) throw new Error("Failed to load badges.json");
    
    const data = await res.json();
    if (!data.data) return [];
    
    return data.data;
  } catch (error) {
    console.error("Error loading Credly badges:", error);
    return null;
  }
}
