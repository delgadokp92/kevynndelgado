"use client";

import { notFound } from "next/navigation";
import { makePage } from "@keystatic/next/ui/app";
import keystaticConfig from "../../../../keystatic.config";

const KeystaticPage = makePage(keystaticConfig);

export default function Page() {
  if (process.env.NODE_ENV === "production") notFound();
  return <KeystaticPage />;
}
