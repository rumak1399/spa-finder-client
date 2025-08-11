import React from "react";
import Image from "next/image";
import { calcReview } from "@/utils/calcReview";
import { calcReviewStars } from "@/utils/calcReviewStars";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { AiTwotoneShop } from "react-icons/ai";

function PostDetails({ post }) {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="w-28 h-28 rounded-full overflow-hidden">
        <Image
          src={post?.image?.url}
          alt={post?.image?.alt}
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-5xl font-bold">{post?.title}</p>
        <div className="flex gap-2 items-center">
          <div className="text-amber-400 text-3xl">
            {calcReviewStars(post?.review)}
          </div>
          <p className="text-md">
            {calcReview(post?.review)} ({post?.review.length} reviews)
          </p>
        </div>
        <div className="flex gap-2 items-center text-lg">
          <AiTwotoneShop />
          <p>{post?.description}</p>
        </div>
        <div className="flex gap-3 items-center font-medium">
          <div className="flex gap-2 items-center">
            <IoIosCheckmarkCircle color="blue" />
            <p className="text-blue-500">Claimed</p>
          </div>
          <LuDot />
          <p>Massage Therapy</p>
        </div>
        {post.price && (
          <div className="flex gap-3 items-center font-medium">
            <LuDot />
            <p>
              Price: <span className="font-bold">{post.price}</span>
            </p>
          </div>
        )}
        {post.additionalPriceInfo && (
          <div className="flex gap-3 items-center font-medium">
            <LuDot />
            <p>
              Price Info:{" "}
              <span className="font-bold">{post.additionalPriceInfo}</span>
            </p>
          </div>
        )}
        <div className="flex flex-col md:flex-row gap-3 md:items-center text-md font-medium">
          <p className="text-red-500">Closed</p>
          <p>10.00 AM - 8.30 PM </p>
          <p className="bg-zinc-200 px-3 py-1 rounded-md w-fit">See hours</p>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
