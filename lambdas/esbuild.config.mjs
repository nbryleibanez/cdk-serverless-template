import { build } from "esbuild";

build({
  entryPoints: [
    "./src/handlers/login/login.ts",
    "./src/handlers/createUser/createUser.ts",
    // add more as needed
  ],
  entryNames: "[name]/index",
  outdir: ".dist",
  bundle: false,
  platform: "node",
  target: "node22",
  sourcemap: false,
  minify: false,
  logLevel: "info",
}).catch(() => process.exit(1));
