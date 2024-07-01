import sass from 'rollup-plugin-sass';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.js',
    output: {
        file: 'assets/js/main.js',
        format: 'iife', // Suitable for <script> tags in browsers
        sourcemap: true
    },
    plugins: [
        sass({
            output: 'assets/styles/main.css'
        }),
        terser()
    ]
};