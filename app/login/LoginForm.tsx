"use client";

import { useActionState, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { authenticate } from "./actions";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/";
  const [state, formAction, isPending] = useActionState(authenticate, null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#02262C] px-4 py-12 text-[#E1E9E8]">
      <div className="w-full max-w-md rounded-2xl border border-[#0B3F46] bg-[#07333A] p-8 shadow-2xl backdrop-blur-sm sm:p-10">
        <div className="mb-8 text-center">
          <div className="mb-5 inline-flex items-center justify-center">
            <Image
              src="/assets/img/logo-wordmark-white.png"
              alt="Servicechai Logo"
              width={160}
              height={38}
              priority
              className="h-auto w-36"
            />
          </div>
          <h1 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Protected Preview
          </h1>
          <p className="mt-2 text-sm text-[#A9C4C6]">
            Please enter the access password to view this website.
          </p>
        </div>

        {state?.error && (
          <div
            role="alert"
            className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-center text-sm font-medium text-red-300"
          >
            {state.error}
          </div>
        )}

        <form action={formAction} className="space-y-5">
          <input type="hidden" name="from" value={from} />

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-semibold uppercase tracking-wider text-[#A9C4C6]"
            >
              Password
            </label>
            <div className="relative mt-2">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                autoFocus
                autoComplete="current-password"
                placeholder="••••••••••••"
                className="w-full rounded-lg border border-[#0B3F46] bg-[#02262C] px-4 py-3 pr-11 text-white placeholder-[#4A5F63] outline-none transition focus:border-[#3ECFB0] focus:ring-2 focus:ring-[#3ECFB0]/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#8FAFB2] transition hover:text-white"
              >
                {showPassword ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="flex w-full items-center justify-center rounded-lg bg-[#3ECFB0] py-3 text-sm font-semibold text-[#02262C] transition duration-150 hover:bg-[#63DDC2] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? "Validating..." : "Enter Website"}
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-[#8FAFB2]">
          Authorized visitors only. Session valid for 7 days.
        </p>
      </div>
    </main>
  );
}
