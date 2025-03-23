import sass from 'rollup-plugin-sass';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/assets/js/main.js',
        format: 'iife', // Suitable for <script> tags in browsers
    },
    plugins: [
		typescript(),
        sass({ output: 'dist/assets/styles/main.css' }),
        terser(),
        copy({
            targets: [
                {
                    src: '*.html',
                    dest: 'dist'
                },
                {
                    src: 'assets/images/**/*',
                    dest: 'dist/assets/images'
                }
            ]
        })
    ]
};