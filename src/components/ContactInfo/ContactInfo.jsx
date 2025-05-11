import React from "react";
import { Pencil, Phone, MapPin, SquareArrowOutUpRight } from "lucide-react";

function ContactInfo() {
  return (
    <div className="bg-white border border-zinc-100  px-5 py-3 rounded-md w-full flex flex-col gap-2">
      <div className="flex justify-between items-center  border-b border-zinc-200 py-2">
        <p className="font-bold text-blue-800">enchanteddsf.com</p>
        <SquareArrowOutUpRight size={18} />
      </div>
      <div className="flex justify-between items-center  border-b border-zinc-200 py-2">
        <p className="font-medium">+1 (234) 567-890</p>
        <Phone size={18} />
      </div>
      <div className="flex justify-between items-center  py-2">
        <div className="flex flex-col">
          <p className="font-bold text-blue-800">Get direction</p>
          <p className="font-medium">123 Magic Lane, Wonderland</p>
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
