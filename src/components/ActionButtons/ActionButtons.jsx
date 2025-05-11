import React from "react";
import { actions } from "../../../assets/data/data";

function ActionButtons() {
  return (
    <div className="flex gap-2 flex-wrap">
      {actions.map((item) => (
        <button
          key={item.id}
          className={`${
            item.id === 1 ? "bg-blue-500 text-white" : "text-black"
          } border border-zinc-200  rounded-md w-fit px-5 py-3 flex items-center gap-2 text-md font-semibold`}
        >
          {item.icon}
          <p>{item.label}</p>
        </button>
      ))}
    </div>
  );
}

export default ActionButtons;
