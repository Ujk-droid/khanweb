import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact TechExa Vision at info@techexavision.com, +44 7888 295318, +92 329 8388739, or WhatsApp +92 331 2436713. Garden East, Karachi, Pakistan.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}