import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate' ,
      devOptions: {
        enabled: true
      },
      manifest: {
        name: '12baskets ',
        short_name: '12baskets',
        description: '12baskets mobile food delivery service fo 12baskets Stores',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/assets/logo192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/logo512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
