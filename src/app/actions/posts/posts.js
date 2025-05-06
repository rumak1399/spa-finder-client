export const getPosts = async () => {
  const res = await fetch(`${process.env.API_LIVE_LINK}/post/getposts`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};
