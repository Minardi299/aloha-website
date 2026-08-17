import type { Config } from "@react-router/dev/config"

export default {
  appDirectory: "src",
  ssr: false,
  prerender: [
    "/",
    "/menu",
    "/terms",
    "/catering",
    "/vi",
    "/vi/menu",
    "/vi/terms",
    "/vi/catering",
  ],
} satisfies Config
