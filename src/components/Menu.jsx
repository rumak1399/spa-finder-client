import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import AuthComponent from "./AuthComponent/AuthComponent";
import Auth from "./AuthComponent/Auth";

async function Menu() {
  return (
    <header className="bg-white dark:bg-zinc-900 shadow-sm transition-colors duration-200">
      <div className="container mx-auto w-full md:max-w-7xl px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            SpaFinder
          </Link>

          <nav className="hidden md:block">
            <div className="flex gap-8">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Browse Services
              </Link>
              <Link
                href="/about"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </nav>
          <div className="hidden md:block">

          <AuthComponent/>
          </div>
          <div className="block md:hidden">
            <DropdownMenu >
              <DropdownMenuTrigger>
                <HiOutlineBars3BottomRight size={30} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <AuthComponent />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* <Auth/> */}
        </div>
      </div>
    </header>
  );
}

export default Menu;
