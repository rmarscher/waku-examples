import { defineConfig } from "waku/config";
import tailwindcss from "@tailwindcss/vite";
/// append-template-slot-imports

export default defineConfig({
  middleware: [
    "waku/middleware/context",
    "waku/middleware/dev-server",
    "./waku-capnweb-middleware",
    /// append-template-slot-middleware
    "waku/middleware/handler",
  ],
  /// append-template-slot-config
  vite: {
    plugins: [
      tailwindcss(),
      /// append-template-slot-vite-plugins
    ],
    /// append-template-slot-vite
  },
});
