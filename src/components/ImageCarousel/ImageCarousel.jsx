import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
// import { MdOutlineArrowRightAlt } from "react-icons/md";
import { images } from "../../../assets/data/data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function ImageCarousel({title}) {
  return (
    <Dialog>
      <div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-extrabold">Highlights</p>
          <DialogTrigger>
            <div className="flex items-center gap-2">
              <span>See all photos</span>
              {/* <MdOutlineArrowRightAlt /> */}
            </div>
          </DialogTrigger>
        </div>

        <div className="w-xs md:w-full relative">
          <Carousel
            opts={{
              align: "start",
            }}
          >
            <CarouselContent>
              {images.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div>
                    <div className="flex aspect-square items-center justify-center overflow-hidden ">
                      <Image
                        src={item?.img}
                        alt={item?.img}
                        width={100}
                        height={100}
                        className="object-cover w-full h-2/3 rounded-md"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute top-1/2 left-15 flex justify-between w-[60%] sm:w-[62%] md:w-[80%] lg:w-[83%]">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
      <DialogContent className="w-[900px]">
        <DialogTitle>
          Photos for {title}
        </DialogTitle>
        <div className="flex items-center gap-5 flex-wrap">

        {images.map((item) => (
          <div key={item.id} className="w-1/3">
            <Image
              src={item.img}
              alt={item.img}
              width={100}
              height={100}
              className="object-cover w-full h-full "
              />
          </div>
        ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ImageCarousel;
