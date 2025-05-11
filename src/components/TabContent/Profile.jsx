import Image from "next/image";
import React from "react";

function Profile({ profile }) {
  // console.log("profile", profile);

  return <div className="w-full mx-auto  rounded-3xl overflow-hidden bg-white ">
      {/* Background Banner */}
      <div className="h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative">
        {/* Profile Image */}
        <Image
          src={profile.user.image}
          alt={profile.user.name}
          width={100}
          height={100}
          className="absolute left-15 transform -translate-x-1/2 top-12 w-24 h-24 rounded-full border-4 border-white shadow-md"
        />
      </div>

      {/* User Info */}
      <div className="pt-16 pb-6 px-6 ">
        <h2 className="text-xl font-bold text-gray-800">{profile.user.name}</h2>
        <p className="text-gray-500 text-sm mt-1">{profile.user.email}</p>
      </div>

      {/* Optional Footer */}

    </div>;
}

export default Profile;
