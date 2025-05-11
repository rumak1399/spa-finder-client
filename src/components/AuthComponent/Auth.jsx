import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  //   DropdownMenuItem,
  //   DropdownMenuLabel,
  //   DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";

import AuthComponent from "./AuthComponent";

function Auth() {
  return (
    <div>
      <div className="hidden md:block">
        <AuthComponent />
      </div>
      <div className="block md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <HiOutlineBars3BottomRight size={30} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <AuthComponent />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Auth;
