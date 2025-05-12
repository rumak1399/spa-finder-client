export const getTags = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LIVE_LINK}/tag/getuniquetags`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};
