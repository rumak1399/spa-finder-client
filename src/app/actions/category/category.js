export async function getCategories() {
    const res = await fetch(`${process.env.API_LIVE_LINK}/categories/all`, {
      method: "GET", 
      headers:{
        "Content-Type":  "application/json",
        // Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify(data),
      cache: "no-store",
      // next: { revalidate: 3600 }, // Optional: revalidate every hour
      // next: {
      //   revalidate: 3600,
      //   tags: ['products'],
      // },
      // credentials: 'include',
    });
    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }
    return res.json();
  }
  