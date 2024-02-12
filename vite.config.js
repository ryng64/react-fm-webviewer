import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

// function inlineReact(template) {
//   return {
//     name: "React Inliner",
//     generateBundle(opts, bundle) {
//       // const file = path.parse(opts.entryFileNames).base;
//       // console.log("****************", bundle);
//       const code = bundle[opts.entryFileNames].code;
//       const output = fs.readFileSync("./src/template.html", "utf-8");
//       console.log(bundle);
//       console.log(opts);
//       bundle[opts.entryFileNames].code = output.replace(
//         "%%script%%",
//         () => code
//       );
//     },
//   };
// }

function inlineEmiter(template) {
  return {
    name: "emit-inline-fmreact",
    async generateBundle(opts, bundle) {
      const code = bundle[opts.entryFileNames].code;
      const svg = bundle[opts.entryFileNames].viteMetadata;
      console.log("svg##########", svg.importedAssets);
      // console.log("options", opts);
      const output = fs
        .readFileSync(template, "utf-8")
        .replace("%%script%%", () => code);
      this.emitFile({
        type: "asset",
        fileName: "index.html",
        source: output,
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ emitCss: false }),
    // inlineReact("./src/template.html"),
    inlineEmiter("./src/template.html"),
  ],
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
