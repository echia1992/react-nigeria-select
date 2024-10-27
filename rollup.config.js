import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        format: "esm",
        sourcemap: true,
        exports: "named",
        preserveModules: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: [".ts", ".tsx"],
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/__tests__/**", "**/*.test.tsx", "**/*.stories.tsx"],
        declaration: true,
        declarationDir: "dist",
        outDir: "dist",
        rootDir: "src",
        // outDir: null,
      }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: {
      dir: "dist", // Changed: using dir instead of file
      format: "esm",
      preserveModules: true, // Added: preserve the module structure
    },
    plugins: [dts()],
    external: [/\.css$/],
  },
];
// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import typescript from "@rollup/plugin-typescript";
// import dts from "rollup-plugin-dts";
// import terser from "@rollup/plugin-terser";

// const packageJson = require("./package.json");

// export default [
//   {
//     input: "src/index.ts",
//     output: [
//       {
//         file: packageJson.main,
//         format: "cjs",
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: "esm",
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       resolve(),
//       commonjs(),
//       typescript({ tsconfig: "./tsconfig.json" }),
//       terser(),
//     ],
//     external: ["react", "react-dom"],
//   },
//   {
//     input: "dist/types/index.d.ts",
//     output: [{ file: "dist/index.d.ts", format: "esm" }],
//     plugins: [dts()],
//   },
// ];
