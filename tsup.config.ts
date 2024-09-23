import { defineConfig, Options } from 'tsup';

export default defineConfig(() => {
    const format = ['cjs', 'esm', 'iife', 'umd'] as Options["format"];
    return {
        entry: ['src/index.ts'],
        format: format,
        splitting: false,
        sourcemap: true,
        clean: true,
    }
})
