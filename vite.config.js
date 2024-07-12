import checker from "vite-plugin-checker";
import VitePluginBrowserSync from "vite-plugin-browser-sync";
import { qrcode } from "vite-plugin-qrcode";
import path from "path";

export default {
  plugins: [
    // checker({
    //   typescript: true,
    //    eslint: {
    //     lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
    //   },
    //   stylelint: {
    //     lintCommand: 'stylelint ./src/**/*.{css,scss}'
    //   },
    // }),
    VitePluginBrowserSync(),
    qrcode(),
  ],
  base: "",
  Host: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
  build: {
    rollupOptions: {
      // input: {
      //   main: path.resolve(__dirname, "index.html"),
      // },
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|webp|webm|ico/i.test(extType)) {
            extType = "img";
          } else if (/ttf|woff|woff2/i.test(extType)) {
            extType = "fonts";
          } else if (/css/i.test(extType)) {
            extType = "css";
          }
          return `assets/${extType}/[name][extname]`;
        },
      },
    },
  },
};
