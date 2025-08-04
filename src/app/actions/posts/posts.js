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

export async function getPostsByCategories(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_LIVE_LINK}/post/getpostsbycategory/categoryslug/${slug}`,
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
  console.log(
    `${process.env.NEXT_PUBLIC_API_LIVE_LINK}/post/getsinglepost/${id}`
  );
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

export async function getPostsByTags({ categoryId, state, city }) {
  const params = new URLSearchParams();
  if (categoryId) params.set("categoryId", categoryId);
  if (state) params.set("state", state);
  if (city) params.set("city", city);
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
