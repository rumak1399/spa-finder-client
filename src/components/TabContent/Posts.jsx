"use client";
import { HiBuildingStorefront } from "react-icons/hi2";
import { useGetPostsByUserIdQuery } from "@/redux/endpoints/postEndpoints/getPosts";
import React from "react";
import { calcReview } from "@/utils/calcReview";
import { calcReviewStars } from "@/utils/calcReviewStars";
import Image from "next/image";
import Link from "next/link";

function Posts({ profile }) {
  const {
    data: posts,
    isLoading: postsLoading,
    isError: postsError,
  } = useGetPostsByUserIdQuery(profile.userId);
  // console.log(posts, postsLoading, postsError);

  return (
    <div>
      <div className="w-full">
        {posts?.map((item) => (
          <Link key={item?._id} href={`/post/${item?._id}`}>
            <div className="flex flex-col md:flex-row gap-5 border-b border-gray-300 hover:shadow-md p-5">
              <div className="w-full md:w-1/2 h-52 overflow-hidden rounded-md">
                <Image
                  src={item?.image?.url}
                  alt={"product image"}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 justify-between">
                <div className="flex flex-col gap-2">
                  <p>{item?.title}</p>
                  <div className="flex gap-2">
                    <div className="text-amber-400">
                      {calcReviewStars(item?.review)}
                    </div>
                    <p>
                      {calcReview(item?.review)} ({item?.review.length} reviews)
                    </p>
                  </div>
                  <div className="flex gap-2 items-center ">
                    <HiBuildingStorefront />
                    <p>{item?.description}</p>
                  </div>
                </div>
                {/* <div className="flex justify-start md:justify-end">
                <button className="bg-blue-500 rounded-md px-5 py-3 flex items-center gap-2">
                  <MessageCircleMore size={20} color="white" />
                  <p className="text-sm text-white">
                    Get pricing & availability
                  </p>
                </button>
              </div> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Posts;
