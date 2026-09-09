import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),

        about: resolve(__dirname, 'src/pages/about/about.html'),
        community: resolve(__dirname, 'src/pages/community/community.html'),
        consumerRegister: resolve(__dirname, 'src/pages/consumer-register/consumer-register.html'),
        contact: resolve(__dirname, 'src/pages/contact/contact.html'),
        delivery: resolve(__dirname, 'src/pages/delivery/delivery.html'),
        producerRegister: resolve(__dirname, 'src/pages/producer-register/producer-register.html'),
        products: resolve(__dirname, 'src/pages/products/products.html'),
        register: resolve(__dirname, 'src/pages/register/register.html')
      }
    }
  }
})
