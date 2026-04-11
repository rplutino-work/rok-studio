"use client";

import { LocaleProvider } from "@/lib/locale-context";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
