export const getPosts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_LIVE_LINK}/post/getposts`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

export async function getPostsByCategories(id) {
  console.log("action", id);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_LIVE_LINK}/post/getpostsbycategory/${id}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.log("Error from server:", errorText);
    throw new Error("Failed to fetch posts by category");
  }
  return res.json();
}

export async function getSinglePost(id) {
  // console.log("action", id);
  console.log(`${process.env.NEXT_PUBLIC_API_LIVE_LINK}/post/getsinglepost/${id}`)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_LIVE_LINK}/post/getsinglepost/${id}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.log("Error from server:", errorText);
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

export async function getPostsByTags({ categoryId, tags }) {
  const params = new URLSearchParams();
  if (categoryId) params.set("categoryId", categoryId);
  if (tags && tags.length > 0) params.set("tags", tags.join(","));
  const url = `${
    process.env.NEXT_PUBLIC_API_LIVE_LINK
  }/post/getpostsbycategoryandtags?${params.toString()}`;
  // console.log("url", url);

  const res = await fetch(url, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export const getPostsByPopularity = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_LIVE_LINK}/post/getpostsbypopularity`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};
