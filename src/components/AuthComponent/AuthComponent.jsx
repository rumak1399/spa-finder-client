import React from "react";
import { authFunction, logout } from "@/app/actions";
import { auth } from "@/auth";
import AuthDialog from "../AuthDialog";
import { IoPersonCircleOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

async function AuthComponent() {
  const session = await auth();

  return (
    <div>
      {session?.user ? (
        <div className="flex flex-col md:flex-row items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <p className="flex items-center gap-2">
                <IoPersonCircleOutline />
                <span className="text-gray-600 dark:text-gray-300">
                  {session?.user?.name}
                </span>
              </p>{" "}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link 
              href="/dashboard"
              >
              <div className="py-2 px-4">
                Dashboard
              </div>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          <form action={logout}>
            <button
              className="px-4 py-2 rounded-lg font-medium bg-blue-600 dark:bg-blue-800 text-white border border-blue-600 dark:border-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 transition-all"
              type="submit"
              name="action"
              value="logout"
            >
              Log Out
            </button>
          </form>
        </div>
      ) : (
        <AuthDialog />
      )}
    </div>
  );
}

export default AuthComponent;
