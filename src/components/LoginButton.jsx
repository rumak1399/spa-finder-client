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
import Image from "next/image";
import { authFunction } from "@/app/actions";

function LoginButton({ isOpen, setIsOpen, switchToSignup }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="px-4 py-2 rounded-lg font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-zinc-950 transition-all">
          Log In
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>Sign in to your account</DialogDescription>
        </DialogHeader>

        {/* Login form would go here */}
        <form action={authFunction}>
          <button
            type="submit"
            name="action"
            value="google"
            className="flex w-full gap-4 border border-gray-300 p-2 rounded-lg items-center justify-center"
          >
            <Image src="/logo.png" alt="Logo" width={100} height={100} className="w-10 h-10" />
            <p>Continue with Google</p>
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <DialogClose asChild>
              <button
                className="text-blue-600 hover:underline"
                onClick={switchToSignup}
              >
                Sign up
              </button>
            </DialogClose>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LoginButton;
