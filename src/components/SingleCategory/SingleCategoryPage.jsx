import React from "react";
import { getPostsByCategories } from "@/app/actions/posts/posts";
import MapWithMarkers from "@/components/MapWithMarkers/MapWithMarkers";
import { calcReview } from "@/utils/calcReview";
import { calcReviewStars } from "@/utils/calcReviewStars";
import Image from "next/image";
import { MessageCircleMore, Store } from "lucide-react";
import NotAvailable from "../NotAvailable/NotAvailable";
import { MdFolderOff } from "react-icons/md";
async function SingleCategoryPage({ categoryId }) {
  console.log("LINE AT 4", categoryId);

  const posts = await getPostsByCategories(categoryId);
  console.log("posts", posts);
  if (!posts || posts?.length === 0) {
    return (
      <NotAvailable
        message="No posts available for this category"
        icon={<MdFolderOff/>}
      />
    );
  }
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      <div className="w-full md:w-1/2">
        {posts?.map((item) => (
          <div
            key={item?._id}
            className="flex flex-col md:flex-row gap-5 border-b border-gray-300 hover:shadow-md p-5"
          >
            <div className="w-46 h-52 overflow-hidden rounded-md">
              <Image
                src={item?.image?.url}
                alt={item?.image?.alt}
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
                <div className="flex gap-2">
                  <Store />
                  <p>{item?.description}</p>
                </div>
              </div>
              <div className="flex justify-start md:justify-end">
                <button className="bg-blue-500 rounded-md px-5 py-3 flex items-center gap-2">
                  <MessageCircleMore size={20} color="white" />
                  <p className="text-sm text-white">
                    Get pricing & availability
                  </p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Map Section  */}
      <div className="w-full md:w-2/5 sticky top-4 h-screen">
        <MapWithMarkers />
      </div>
    </div>
  );
}

export default SingleCategoryPage;
