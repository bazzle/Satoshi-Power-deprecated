import sass from 'rollup-plugin-sass';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {
        file: 'assets/js/main.js',
        format: 'iife', // Suitable for <script> tags in browsers
        sourcemap: true
    },
    plugins: [
		typescript(),
        sass({
            output: 'assets/styles/main.css'
        }),
        terser()
    ]
};