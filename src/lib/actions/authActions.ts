"use server";

import { signIn, signOut } from "@/auth";

export async function signInFunction() {
  try {
    await signIn("github"); // redirect()
  } catch (error: any) {
    if (error.message === "NEXT_REDIRECT") {
      throw error;
    }
    return error.message;
  }
}

export async function signOutFunction() {
  await signOut();
}
