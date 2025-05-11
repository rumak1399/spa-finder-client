"use client";

import * as Tabs from "@radix-ui/react-tabs";
import Profile from "../TabContent/Profile";
import PostForm from "../TabContent/PostForm";
import Posts from "../TabContent/Posts";

export default function SideTabs({ tablist, profile }) {
  return (
    <Tabs.Root
      defaultValue="profile"
      className="flex flex-col md:flex-row min-h-screen w-full border rounded-lg overflow-hidden"
    >
      {/* Tab List (Left Side) */}
      <Tabs.List className="flex flex-col w-full md:w-1/4 bg-gray-100 p-2 space-y-2">
        {tablist.map((item) => (
          <Tabs.Trigger
            key={item?.id}
            value={item?.value}
            className="px-3 py-2 text-left rounded-md data-[state=active]:bg-white data-[state=active]:font-semibold focus:outline-none hover:bg-white"
          >
            {item?.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {/* Tab Content (Right Side) */}
      <div className="flex-1 p-4 bg-white">
        <Tabs.Content value="profile">
          <Profile profile={profile} />
        </Tabs.Content>
        <Tabs.Content value="my-posts">
          <Posts profile={profile} />
        </Tabs.Content>
        <Tabs.Content value="upload-post">
          <PostForm profile={profile}/>
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
}
