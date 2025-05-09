import { getPosts } from "@/app/actions/posts/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function PopularPostsList() {
  try {
    const posts = await getPosts();
    // console.log("Posts", posts);

    const calcReview = (reviews) => {
      if (!reviews.length) return 0;
      const sum = reviews.reduce((acc, val) => acc + val.rating, 0);
      return sum / reviews.length;
    };

    const calcReviewStars = (reviews) => {
      if (!reviews.length) return "No reviews";

      const sum = reviews.reduce(
        (acc, review) => acc + (review.rating || 0),
        0
      );
      const average = sum / reviews.length;
      const fullStars = Math.floor(average);
      const halfStar = average % 1 >= 0.5;
      const totalStars = 5;

      let stars = "★".repeat(fullStars);
      if (halfStar && fullStars < 5) stars += "½";
      stars += "☆".repeat(totalStars - stars.length);

      return stars;
    };

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts?.map((item) => (
          <div
            key={item?._id}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src={item?.image?.url}
                alt={item?.image?.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-black">{item?.title}</h3>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                  0.8 miles
                </span>
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

              <p className="text-sm text-gray-500 mt-2">{item?.description}</p>

              <div className="flex justify-between items-center mt-3">
                <span className="font-semibold">$ {item?.price}</span>
                <Link
                  href="/services/1"
                  className="px-4 py-2 rounded-lg font-medium bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 transition-all"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.log(error);
    throw new Error("ErrorDisplay");
  }
}

export default PopularPostsList;
