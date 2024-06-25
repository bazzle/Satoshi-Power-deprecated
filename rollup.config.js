import { terser } from "rollup-plugin-terser";

// Define multiple input and output options
const configs = [
  {
    input: 'assets/src/js/main2.js',
    output: {
      file: 'assets/dist/js/main.min.js',
      sourcemap: true
    }
  }
];

// Export as an array of configurations
export default configs;
