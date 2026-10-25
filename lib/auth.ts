// lib/auth.ts

const encoder = new TextEncoder();

/**
 * Imports a raw secret string into an HMAC CryptoKey using Web Crypto API.
 */
async function getCryptoKey(secret: string): Promise<CryptoKey> {
  return await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return bytes;
}

/**
 * Creates a tamper-proof session token: `${timestamp}.${hmacSignature}`
 */
export async function createSessionToken(secret: string): Promise<string> {
  const key = await getCryptoKey(secret);
  const timestamp = Date.now().toString();
  const data = encoder.encode(`authenticated:${timestamp}`);
  const signatureBuffer = await crypto.subtle.sign("HMAC", key, data);
  const signature = bytesToHex(new Uint8Array(signatureBuffer));
  return `${timestamp}.${signature}`;
}

/**
 * Verifies the token signature and checks if the session has expired.
 * Default maxAge: 7 days (in milliseconds).
 */
export async function verifySessionToken(
  token: string | undefined | null,
  secret: string,
  maxAgeMs = 7 * 24 * 60 * 60 * 1000
): Promise<boolean> {
  if (!token || !secret) return false;

  try {
    const [timestamp, signature] = token.split(".");
    if (!timestamp || !signature) return false;

    // Check expiration
    const tokenTime = parseInt(timestamp, 10);
    if (isNaN(tokenTime) || Date.now() - tokenTime > maxAgeMs) {
      return false;
    }

    const key = await getCryptoKey(secret);
    const data = encoder.encode(`authenticated:${timestamp}`);
    const sigBytes = hexToBytes(signature);

    return await crypto.subtle.verify(
      "HMAC",
      key,
      sigBytes as unknown as BufferSource,
      data as unknown as BufferSource
    );
  } catch {
    return false;
  }
}
