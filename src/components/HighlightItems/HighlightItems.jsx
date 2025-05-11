import React from "react";
import { MdOutlineInfo } from "react-icons/md";
import { highlights } from "../../../assets/data/data";

function HighlightItems() {
  return (
    <div className="flex flex-col gap-5 border-b border-zinc-200 pb-5">
      <div className="flex items-center">
        <p className="text-lg font-extrabold">Highlights</p>
        <MdOutlineInfo />
      </div>

      <div className="flex gap-5 flex-wrap">
        {highlights.map((item) => (
          <button
            key={item.id}
            className="w-fit px-5 py-3 flex border border-zinc-100 flex-row md:flex-col items-center gap-2 text-md font-semibold"
          >
            {item.icon}
            <p>{item.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default HighlightItems;
