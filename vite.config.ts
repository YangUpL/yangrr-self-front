import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// import { resolve } from "path";
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   // 配置路径别名
  //   alias: [
  //     // 配置 @ 指代 src
  //     {
  //       find: "@",
  //       replacement: resolve(__dirname, "./src"),
  //     },
  //   ],
  //   extensions: [".js", ".vue", ".json"],
  // },
  plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
  ],

    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080', // 目标服务器地址
                changeOrigin: true, // 是否改变源地址
                rewrite: (path) => path.replace(/^\/api/, '') // 重写路径
            },


          "/wapi": {
            // https://gitlab.com/Binaryify/neteasecloudmusicapi
            // 网易云的音乐代理
            target: "http://mrzym.top:3000",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/wapi/, ""),
          },
        },

      
    }


})
