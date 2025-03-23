import sass from 'rollup-plugin-sass';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
    input: 'assets/js/main.js',
    output: {
        file: 'dist/assets/js/main.js',
        format: 'iife', // Suitable for <script> tags in browsers
    },
    plugins: [
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