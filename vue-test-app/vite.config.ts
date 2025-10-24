// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve, } from "path"

export default defineConfig({
    // Базовый путь для деплоя
    base: '/',

    resolve: {
        alias: {
            "@": resolve(__dirname, "src")
        }
    },

    plugins: [
        // Плагин для поддержки Vue 3
        vue(),
        tailwindcss()
    ],

    // Настройка сборки
    build: {
        outDir: 'dist', // Папка для сборки
        sourcemap: true, // Генерация sourcemaps
    },
})