import { auth } from "@/auth";
import SideTabs from "@/components/ui/side-by-side-tabs";
import React from "react";
import { tablist } from "../../../assets/data/data";


async function Dashboard() {
  const profile = await auth();
  // console.log("data 6", profile);

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-4">
      <SideTabs tablist={tablist} profile={profile}/>
    </div>
  );
}

export default Dashboard;
