import babel from "rollup-plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import external from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"
import commonjs from "@rollup/plugin-commonjs"
import { terser } from "rollup-plugin-terser"
import json from "@rollup/plugin-json"

export default [
  {
    external: ["react", "react-dom"],
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      json(),
      commonjs(),
      external(),
      resolve(),
      terser(),
    ],
  },
]
