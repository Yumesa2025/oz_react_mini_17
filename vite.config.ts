import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // styled-system/css 등 Panda CSS import를 로컬 폴더로 연결
      "styled-system": path.resolve(__dirname, "./styled-system"),
    },
  },
});
