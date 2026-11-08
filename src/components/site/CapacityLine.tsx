"use client";

import { useSyncExternalStore } from "react";
import { CAPACITY, CAPACITY_LINE } from "@/content/common";

const subscribe = () => () => {};

function visitorMonth() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

/**
 * The capacity line, or the real count once there is one. Pages are built ahead of time, so the
 * month is read in the browser; until then this renders the plain line.
 */
export default function CapacityLine() {
  const month = useSyncExternalStore(subscribe, visitorMonth, () => null);
  const { taken, total, label } = CAPACITY;
  if (taken === null || taken < 2 || month !== CAPACITY.month) return <>{CAPACITY_LINE}</>;
  return (
    <>
      <span className="mr-1.5 inline-flex items-center gap-[3px] align-middle" aria-hidden="true">
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className="inline-block rounded-full"
            style={{ width: 6, height: 6, border: "1px solid currentColor", background: i < taken ? "currentColor" : "transparent" }}
          />
        ))}
      </span>
      {label}: {taken} of {total} client spots taken
    </>
  );
}
