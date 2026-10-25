import { Suspense } from "react";
import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Protected Access | Servicechai",
  description: "Enter access password to view this website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <LoginForm />
    </Suspense>
  );
}

function LoginFallback() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#02262C] px-4 py-12 text-[#E1E9E8]">
      <div className="w-full max-w-md rounded-2xl border border-[#0B3F46] bg-[#07333A] p-8 text-center text-[#A9C4C6]">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-[#3ECFB0] border-t-transparent" />
        <p className="text-sm">Loading security gate...</p>
      </div>
    </main>
  );
}
