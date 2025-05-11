import { getPosts } from "@/app/actions/posts/posts";
import React from "react";
import MapWithMarkers from "./MapWithMarkers/MapWithMarkers";
import { calcReviewStars } from "@/utils/calcReviewStars";
import { calcReview } from "@/utils/calcReview";
import Link from "next/link";

async function ServiceList() {
  const posts = await getPosts();
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-center h-96 bg-gray-200 rounded-lg">
        <MapWithMarkers />
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-2 text-black ">
          Top <span className="text-blue-500 text-xl font-bold">{posts.length}</span>  Services Near You
        </h3>
        <ul className="flex flex-col gap-2">
          {posts.map((item) => (
            <Link
            key={item._id}
            href={`/post/${item?._id}`}
            >
            
            <li className="flex flex-col md:flex-row justify-between p-2 hover:bg-gray-50 rounded">
              <div>
                <p className="font-medium text-zinc-700">{item?.title}</p>
                <p className="text-sm text-zinc-400">0.8 miles away</p>
              </div>
              {item?.review.length > 0 ? (
                <div className="flex items-center mt-1">
                  <div className="text-amber-400">
                    {calcReviewStars(item?.review)}
                  </div>
                  <span className="text-sm text-gray-500 ml-1">
                    {calcReview(item?.review)} ({item?.review.length} reviews)
                  </span>
                </div>
              ) : (
                <p>No reviews yet!</p>
              )}
            </li>
          </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceList;
