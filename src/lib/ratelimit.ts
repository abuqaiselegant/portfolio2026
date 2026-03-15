import "@/env";
import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "@/lib/redis";

const hasRedis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN;

/** When Redis is configured, use Upstash rate limit; otherwise allow all (Gemini works without Upstash). */
export const geminiRatelimit = hasRedis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(10, "60 s"),
      analytics: true,
      prefix: "ratelimit:gemini",
    })
  : {
      limit: async () => ({ success: true, reset: Date.now() + 60_000 }),
    };
