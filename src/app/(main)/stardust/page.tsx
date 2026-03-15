import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { StardustContent } from "./stardust-content";
import { StardustClock } from "./stardust-clock";

export const metadata: Metadata = {
  title: `Stardust | ${siteConfig.name}`,
  description: "Motivation, goals, quotes, resources, and random musings.",
  openGraph: {
    title: `Stardust | ${siteConfig.name}`,
    description: "Motivation, goals, quotes, resources, and random musings.",
    url: `${siteConfig.origin}/stardust`,
  },
};

const SECTION_KEYS = ["quotes", "goals", "resources", "random"] as const;
const SECTION_LABELS: Record<(typeof SECTION_KEYS)[number], string> = {
  quotes: "Quotes & motivation",
  goals: "Goals & next up",
  resources: "Resources",
  random: "Random / poetic",
};

export default function StardustPage() {
  return (
    <div className="relative overflow-hidden">
      <StardustClock />

      <div className="absolute h-full w-10 -left-12 top-14">
        <Link
          href="/"
          className="margin-wobble sticky top-4 inline-block"
          aria-label="Back"
        >
          <ArrowLeft className="size-4" />
        </Link>
      </div>

      <div className="mt-10 flex flex-col gap-6 relative">
        <h1 className="margin-glitch text-2xl font-semibold tracking-tight inline-block w-fit">
          Stardust
        </h1>
        <StardustContent sectionKeys={SECTION_KEYS} sectionLabels={SECTION_LABELS} />
      </div>
    </div>
  );
}
