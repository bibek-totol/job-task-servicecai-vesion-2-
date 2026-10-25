"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSessionToken } from "@/lib/auth";
import { SESSION_COOKIE_NAME } from "@/proxy";

export interface LoginState {
  error?: string;
}

export async function authenticate(
  _prevState: LoginState | null,
  formData: FormData
): Promise<LoginState> {
  const password = formData.get("password") as string;
  const fromPath = (formData.get("from") as string) || "/";

  const sitePassword = process.env.SITE_PASSWORD;
  const siteSecret = process.env.SITE_PASSWORD_SECRET;

  if (!sitePassword || !siteSecret) {
    return {
      error: "Site password configuration is missing. Set SITE_PASSWORD and SITE_PASSWORD_SECRET environment variables.",
    };
  }

  if (password !== sitePassword) {
    return { error: "Incorrect password. Please try again." };
  }

  // Generate cryptographically signed token
  const token = await createSessionToken(siteSecret);
  const cookieStore = await cookies();

  // Set secure HTTP-only cookie
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  const target = fromPath.startsWith("/") ? fromPath : "/";
  redirect(target);
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  redirect("/login");
}
