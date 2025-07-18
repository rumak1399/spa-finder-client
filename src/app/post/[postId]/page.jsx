import { getSinglePost } from "@/app/actions/posts/posts";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import React from "react";
import ActionButtons from "@/components/ActionButtons/ActionButtons";
import PostDetails from "@/components/PostDetails/PostDetails";
import { RiShareBoxFill } from "react-icons/ri";
import HighlightItems from "@/components/HighlightItems/HighlightItems";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";

async function SinglePost({ params }) {
  const { postId } = await params;
  const post = await getSinglePost(postId);


  return (
    <div className="min-h-screen mx-auto w-full md:w-7xl flex relative p-4">
      <div className="flex flex-col gap-10 w-full md:w-3/5">
        <div className="flex flex-col gap-10 border-b border-zinc-200 pb-5">
          <PostDetails post={post && post} />
          <div className="block md:hidden w-full">
            <ContactInfo phone={post.phone} email={post.email} location={post.location ? post.location : "No Address Added"} />
          </div>
          <ActionButtons />
        </div>
        <div className="flex flex-col gap-5 border-b border-zinc-200 pb-5">
          <p className="text-lg font-extrabold">Services</p>
          <button className="flex gap-2 items-center border border-zinc-300 rounded-md w-fit py-2 px-5 text-md font-medium">
            <RiShareBoxFill />

            <p>Website menu</p>
          </button>
        </div>

        <HighlightItems />

        <ImageCarousel title={post?.title}/>
      
      </div>

      <div className="hidden md:block fixed right-10 lg:right-34 top-20 w-1/4">
        <ContactInfo phone={post.phone} email={post.email} location={post.location ? post.location : "No Address Added"} />
      </div>
    </div>
  );
}

export default SinglePost;
