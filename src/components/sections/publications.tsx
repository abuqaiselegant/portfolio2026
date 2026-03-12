import { publications } from "@/config/publications.config";
import { ListItemCard } from "@/components/ui/list-item-card";
import { ExternalLink } from "lucide-react";

export function Publications() {
  return (
    <div className="mt-5 text-sm">
      <p className="font-semibold text-lg">Publications</p>
      <div className="flex flex-col mt-2 -mx-2">
        {publications.map((pub, i) => (
          <ListItemCard key={`${pub.title}-${i}`} className="flex-col gap-1 items-start hover:bg-chart-2/15 dark:hover:bg-gitmap-ocean-3/25">
            {pub.url ? (
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group"
              >
                <div className="flex items-start justify-between gap-2 w-full">
                  <span className="font-medium text-sm leading-snug">
                    {pub.title}
                  </span>
                  <ExternalLink className="size-3.5 shrink-0 mt-0.5 text-muted-foreground" strokeWidth={1} />
                </div>
                <span className="text-xs text-muted-foreground">
                  {pub.venue} · {pub.year}
                </span>
              </a>
            ) : (
              <div className="w-full">
                <span className="font-medium text-sm leading-snug">
                  {pub.title}
                </span>
                <span className="block text-xs text-muted-foreground mt-0.5">
                  {pub.venue} · {pub.year}
                </span>
              </div>
            )}
          </ListItemCard>
        ))}
      </div>
    </div>
  );
}
