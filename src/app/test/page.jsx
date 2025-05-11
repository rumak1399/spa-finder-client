import React from "react";
import { getPostsByCategories } from "../actions/posts/posts";

async function page() {
  const posts = await getPostsByCategories();
  // console.log(posts);

  return <div>page test1</div>;
}

export default page;
