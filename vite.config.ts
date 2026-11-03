import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    // The custom domain serves the app from the domain root, not /Pledge-Invest/.
    base: '/',
    build: {
        outDir: 'dist',
        sourcemap: false,
        rollupOptions: {
            maxParallelFileOps: 128,
        },
    },
});
