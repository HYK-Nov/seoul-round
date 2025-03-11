import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { readdirSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pageDir = resolve(__dirname, "src/page");
const htmlFiles = readdirSync(pageDir).filter((file) => file.endsWith(".html"));

const input = {
  main: resolve(__dirname, "index.html"),
  ...htmlFiles.reduce((entries, file) => {
    const name = file.replace(".html", "");
    // @ts-ignore
    entries[name] = resolve(pageDir, file);
    return entries;
  }, {}),
};

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/seoul-round/",
  build: {
    rollupOptions: {
      input,
    },
  },
});
