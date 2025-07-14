"use client";
import { useEffect } from "react";

export default function GoogleConversion() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-16453676009/_4LECOyv-qUZEOnX3KU9",
      });
    }
  }, []);

  return null;
}
