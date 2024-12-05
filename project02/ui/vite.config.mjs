import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "",
    build: {
        rollupOptions: {
            output: {
                entryFileNames: "main.js",
                assetFileNames: "main.css",
                chunkFileNames: "chunk.js",
                manualChunks: undefined,
            },
        },
    },
});
