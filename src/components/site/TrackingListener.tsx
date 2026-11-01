"use client";

import { useEffect } from "react";
import { track, type EventName } from "@/lib/track";
import { captureUtm } from "@/lib/utm";

// One click listener for the whole site: any link or button with data-cta="book-call" or
// data-cta="whatsapp" (or a data-event name) reports its event, with data-sector if it has one.
// It also keeps the visit's UTM tags for the forms.
const CTA: Record<string, EventName> = {
  "book-call": "cta_book_call_click",
  whatsapp: "cta_whatsapp_click",
};

export default function TrackingListener() {
  useEffect(() => {
    captureUtm();
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cta], [data-event]");
      if (!el) return;
      const name = (el.dataset.cta ? CTA[el.dataset.cta] : el.dataset.event) as EventName | undefined;
      if (name) track(name, el.dataset.sector ? { sector: el.dataset.sector } : {});
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
