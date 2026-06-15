import { notFound } from "next/navigation";
import { makeRouteHandler } from "@keystatic/next/route-handler";
import keystaticConfig from "../../../../../keystatic.config";

const handler = makeRouteHandler({
  config: keystaticConfig,
  secret: process.env.KEYSTATIC_SECRET ?? "local-dev-secret",
});

export function GET(request: Request) {
  if (process.env.NODE_ENV === "production") notFound();
  return handler.GET(request);
}

export function POST(request: Request) {
  if (process.env.NODE_ENV === "production") notFound();
  return handler.POST(request);
}
