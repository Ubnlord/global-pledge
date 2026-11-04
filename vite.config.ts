import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    // Relative asset URLs work on both GitHub project Pages paths and custom-domain roots.
    base: './',
    build: {
        outDir: 'dist',
        sourcemap: false,
        rollupOptions: {
            maxParallelFileOps: 128,
        },
    },
});
