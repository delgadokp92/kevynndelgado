"use client";

import { useEffect, useState } from "react";

const roles = ["Professor", "Data Scientist", "Researcher"];

const TYPING_SPEED = 90;   // ms per character when typing
const DELETING_SPEED = 45; // ms per character when deleting
const PAUSE_AFTER = 2200;  // ms to pause once fully typed
const PAUSE_BEFORE = 400;  // ms to pause before typing next role

export default function TypewriterRoles() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "waiting">("typing");

  useEffect(() => {
    const current = roles[roleIndex];

    if (phase === "typing") {
      if (displayed === current) {
        // Fully typed — pause before deleting
        const t = setTimeout(() => setPhase("pausing"), PAUSE_AFTER);
        return () => clearTimeout(t);
      }
      const t = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        TYPING_SPEED
      );
      return () => clearTimeout(t);
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), 0);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (displayed === "") {
        // Fully deleted — wait, then move to next role
        const t = setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setPhase("typing");
        }, PAUSE_BEFORE);
        return () => clearTimeout(t);
      }
      const t = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        DELETING_SPEED
      );
      return () => clearTimeout(t);
    }
  }, [displayed, phase, roleIndex]);

  return (
    <p className="mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-neutral-400">
      <span className="text-neutral-600">//</span>
      <span>
        {displayed}
        <span className="ml-px inline-block w-px animate-pulse bg-neutral-400 align-middle"
          style={{ height: "0.9em" }}
        />
      </span>
    </p>
  );
}
