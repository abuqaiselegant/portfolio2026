import { siteConfig } from "@/config/site.config";
import { Mail } from "lucide-react";
import Link from "next/link";

export function BookACall() {
  return (
    <p className="text-sm mt-4 leading-relaxed">
      I am open to new opportunities. Feel free to{" "}
      <Link
        href={`mailto:${siteConfig.email}`}
        className="inline align-middle text-foreground hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none rounded"
        aria-label="Email me"
      >
        <Mail className="h-4 w-4 inline-block align-middle -mt-0.5" strokeWidth={1} />
      </Link>{" "}
      me.
    </p>
  );
}
