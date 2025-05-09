import { authFunction, logout } from "@/app/actions";
import { auth } from "@/auth";
import Link from "next/link";
import React from "react";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import AuthDialog from "./AuthDialog";

async function Menu() {
  const session = await auth();

  return (
    <header className="bg-white dark:bg-zinc-900 shadow-sm transition-colors duration-200">
      <div className="container mx-auto max-w-7xl px-4">
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

          <div >
            {session?.user ? (
              <div className="flex items-center gap-4">
                <p>
                  <span className="text-gray-600 dark:text-gray-300">
                    {session?.user?.name}
                  </span>
                </p>
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
        </div>
      </div>
    </header>
  );
}

export default Menu;
