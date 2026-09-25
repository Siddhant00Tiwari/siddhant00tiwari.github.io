export async function loadCredly(username) {
  if (!username) return null;
  try {
    const credlyUrl = `https://www.credly.com/users/${username}/badges.json`;
    // Use allorigins to bypass CORS
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(credlyUrl)}`;
    
    const res = await fetch(proxyUrl);
    if (!res.ok) throw new Error("Failed to fetch from proxy");
    
    const proxyData = await res.json();
    if (!proxyData.contents) throw new Error("No contents from proxy");
    
    const data = JSON.parse(proxyData.contents);
    if (!data.data) return [];
    
    return data.data;
  } catch (error) {
    console.error("Error loading Credly badges:", error);
    return null;
  }
}
