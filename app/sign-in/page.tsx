"use client";

import { signIn } from "next-auth/react";
import GoogleButton from "react-google-button";

export default function SignIn() {
  return (
    <main className="container mx-auto grow flex items-center flex-col justify-center gap-5">
      <div className="text-lg">Sign In</div>
      <GoogleButton onClick={() => signIn("google")} />
    </main>
  );
}
