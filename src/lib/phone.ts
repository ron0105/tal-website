// Indian mobile numbers (spec section 8): 10 digits starting 6-9, with an optional +91 / 91 / 0 in front.
// Spaces, dashes and brackets are ignored.

export const PHONE_ERROR = "Please add your 10-digit WhatsApp number";

/** The 10-digit number, or null if it isn't a valid Indian mobile. */
export function indianMobile(raw: string): string | null {
  const digits = raw.replace(/[\s\-()]/g, "");
  const m = digits.match(/^(?:\+?91|0)?([6-9]\d{9})$/);
  return m ? m[1] : null;
}
