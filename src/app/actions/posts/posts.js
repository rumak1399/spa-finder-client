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

export async function getPostsByCategories(id) {
  console.log("action", id);
  const res = await fetch(`${process.env.API_LIVE_LINK}/post/getpostsbycategory/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.log("Error from server:", errorText);
    throw new Error("Failed to fetch posts by category");
  }
  return res.json();
}

export async function getSinglePost(id) {
  // console.log("action", id);
  const res = await fetch(`${process.env.API_LIVE_LINK}/post/getsinglepost/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.log("Error from server:", errorText);
    throw new Error("Failed to fetch post");
  }
  return res.json();
}
