import { defineConfig } from 'tsup';

export default defineConfig({
      clean: true,
      dts: true,
      entry: ['index.ts'],
      external: ['react'],
      format: ['esm', 'cjs'],
      minify: true,
      sourcemap: true,
      treeshake: true
});
