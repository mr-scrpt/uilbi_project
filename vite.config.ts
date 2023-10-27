import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [svgr({ exportAsDefault: true }), react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      // {
      //   find: /^@\//,
      //   replacement: `${path.resolve(__dirname, 'src')}/`,
      // },
      // {
      //   // this is required for the SCSS modules
      //   find: /^~(.*)$/,
      //   replacement: '$1',
      // },
    ],
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API_URL__: JSON.stringify('http://localhost:8000'),
  },
  server: {
    port: 3000,
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `

            @import "${path.resolve(__dirname, 'src')}/app/style/mixin";

          `,
      },
    },
  },
})
// @import "${path.resolve(__dirname, 'src')}/app/style/mixin";
// @import "${path.resolve(__dirname, 'src')}/app/lib/smartgrid.lib";
