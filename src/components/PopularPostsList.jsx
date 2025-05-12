import { getPostsByPopularity } from "@/app/actions/posts/posts";
import { calcReview } from "@/utils/calcReview";
import { calcReviewStars } from "@/utils/calcReviewStars";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

async function PopularPostsList() {
  try {
    const posts = await getPostsByPopularity();

    return (
      // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="w-full relative">
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {posts?.map((item) => (
              <CarouselItem
                key={item?._id}
                className="basis-full md:basis-1/2 lg:basis-1/3 border border-zinc-200"
              >
                <Link
                  href={`/post/${item?._id}`}
                  key={item?._id}
                  className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow border border-zinc-200"
                >
                  <div className="relative h-48 w-full ">
                    <Image
                      src={item?.image?.url}
                      alt={item?.image?.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-black">
                        {item?.title}
                      </h3>
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
                          {calcReview(item?.review)} ({item?.review.length}{" "}
                          reviews)
                        </span>
                      </div>
                    ) : (
                      <p>No reviews yet!</p>
                    )}

                    <p className="text-sm text-gray-500 mt-2">
                      {item?.description}
                    </p>

                    <div className="flex justify-between items-center mt-3">
                      <span className="font-semibold">$ {item?.price}</span>
                      <button
                        href="/services/1"
                        className="px-4 py-2 rounded-lg font-medium bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 transition-all"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top-1/2 left-15 flex justify-between w-[60%] sm:w-[70%] md:w-[85%] lg:w-[90%]">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
        
      </div>
    );
  } catch (error) {
    console.log(error);
    throw new Error("ErrorDisplay");
  }
}

export default PopularPostsList;
