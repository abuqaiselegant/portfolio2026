import "@/env";
import { Redis } from "@upstash/redis";

const hasRedis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN;

/** Real Redis when Upstash env vars are set; no-op otherwise (no cache, Gemini still works). */
export const redis = hasRedis
  ? Redis.fromEnv()
  : ({
      get: async () => null,
      set: async () => "OK",
    } as Pick<Redis, "get" | "set">);
