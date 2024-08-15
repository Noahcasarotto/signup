// src/app/ClientLayout.tsx
"use client";

import { FormProvider } from "@/context/FormContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <FormProvider>{children}</FormProvider>;
}
