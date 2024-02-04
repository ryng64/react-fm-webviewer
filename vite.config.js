import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

function inlineReact(template) {
  return {
    name: "React Inliner",
    generateBundle(opts, bundle) {
      // const file = path.parse(opts.entryFileNames).base;
      // console.log("****************", bundle);
      const code = bundle[opts.entryFileNames].code;
      const output = fs.readFileSync("./src/template.html", "utf-8");
      bundle[opts.entryFileNames].code = output.replace(
        "%%script%%",
        () => code
      );
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ emitCss: false }), inlineReact("./src/template.html")],
  build: {
    rollupOptions: {
      input: "src/main.jsx",
      output: {
        // entryFileNames
        format: "iife",
        entryFileNames: "deploy/index.html",
        name: "app",
      },
    },
  },
});
