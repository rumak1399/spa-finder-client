import React from "react";
import { Pencil, Phone, MapPin, SquareArrowOutUpRight } from "lucide-react";

async function reverseGeocode(lat, lng) {
  try {
      if (!lat || !lng) {
    return "No Location Added"
  }
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,
     {
        headers: {
          "User-Agent": "spafinder.vercel.app/1.0 (rumak1399@gmail.com)",
        },
      }
    );

    if (!response.ok) {
      return "Unable to fetch address"
    }

    const data = await response.json();
    return data.display_name || "Unknown location";
  } catch (error) {
    console.error("Reverse geocoding failed:", error);
    return "Unable to fetch address";
  }
}

function ContactInfo({phone, email, location}) {
  const address = reverseGeocode(location.lat, location.lng)
  return (
    <div className="bg-white border border-zinc-100  px-5 py-3 rounded-md w-full flex flex-col gap-2">
      <div className="flex justify-between items-center  border-b border-zinc-200 py-2">
        <p className="font-bold text-blue-800">{email? email : "enchanteddsf.com"}</p>
        <SquareArrowOutUpRight size={18} />
      </div>
      <div className="flex justify-between items-center  border-b border-zinc-200 py-2">
        <p className="font-medium">{phone ? phone : "+1 (234) 567-890"}</p>
        <Phone size={18} />
      </div>
      <div className="flex justify-between items-center  py-2">
        <div className="flex flex-col">
          <p className="font-bold text-blue-800">Get direction</p>
          <p className="font-medium">{address}</p>
        </div>
        <MapPin size={18} />
      </div>
      <div className="border border-zinc-200 rounded-md flex items-center justify-center gap-2 p-2">
        <Pencil />
        <p className="font-semibold">Suggest an edit</p>
      </div>
    </div>
  );
}

export default ContactInfo;
