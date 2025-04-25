"use server";

import { signIn, signOut } from "@/auth";

export const authFunction = async (formData) => {
  const action = formData.get("action");
  console.log("login", action);
  await signIn(action, {
    redirectTo: "/",
    // callbackUrl: "/",
  });
};

export const logout = async () => {
  console.log("Logout action triggered");
  await signOut({
    redirectTo: "/",
    // callbackUrl: "/",
  });
};
