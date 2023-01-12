import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'

import * as myPackage from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      fs: 'rollup-plugin-node-polyfills',
      '@/components': './src/components/index.ts',
      '@/atoms': './src/components/atoms/index.ts',
      '@/modals': './src/components/modals/index.ts',
      '@/molecules': './src/components/molecules/index.ts',
      '@/organisms': './src/components/organisms/index.ts',
      '@/providers': './src/components/providers/index.ts',
      '@/templates': './src/components/templates/index.ts',
      '@/configs': './src/configs/index.ts',
      '@/constants': './src/constants/index.ts',
      '@/hooks': './src/hooks/index.ts',
      '@/mocks': './src/mocks/index.ts',
      '@/request': './src/request/index.ts',
      '@/request/services': './src/request/services/index.ts',
      '@/styles': './src/styles/index.ts',
      '@/public/*': './public/*',
      '@/utils': './src/utils/index.ts',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: './src/index.ts',
      name: 'ui',
      formats: ['es', 'umd'],
      fileName: format => `${myPackage.name}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  },
})
