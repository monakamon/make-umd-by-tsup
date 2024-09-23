import { defineConfig, Options } from 'tsup';
import { umdWrapper } from "esbuild-plugin-umd-wrapper";

export default defineConfig(() => {
    const format = ['cjs', 'esm', 'iife', 'umd'] as Options["format"];
    return {
        entry: ['src/index.ts'],
        format: format,
        esbuildPlugins: [
            umdWrapper({
                libraryName: 'library-hoge',
            })
        ],
        splitting: false,
        sourcemap: true,
        clean: true,
    }
})
