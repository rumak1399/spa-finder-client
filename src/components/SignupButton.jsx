// SignupButton.jsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { authFunction } from "@/app/actions";
import Image from "next/image";

function SignupButton({ isOpen, setIsOpen, switchToLogin }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="px-4 py-2 rounded-lg font-medium bg-blue-600 dark:bg-blue-800 text-white border border-blue-600 dark:border-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 transition-all">
          Sign Up
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Sign Up</DialogTitle>
          <DialogDescription>Create a new account</DialogDescription>
        </DialogHeader>

        {/* Signup form would go here */}
        <form action={authFunction}>
          <button
            type="submit"
            name="action"
            value="google"
            className="flex w-full gap-4 border border-gray-300 p-2 rounded-lg items-center justify-center"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10"
            />
            <p>Continue with Google</p>
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <DialogClose asChild>
              <button
                className="text-blue-600 hover:underline"
                onClick={switchToLogin}
              >
                Log in
              </button>
            </DialogClose>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SignupButton;
