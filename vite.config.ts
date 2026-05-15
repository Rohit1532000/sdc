import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// @lovable.dev wala wrapper hi use karna h
export default defineConfig({
  tanstackStart: {
    ssr: false, // Humne pehle decide kiya tha ki static build chahiye
  },
});