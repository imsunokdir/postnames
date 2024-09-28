import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/simple-postsearch/",
});

// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/imsunokdir/postnames.git
// git push -u origin main
