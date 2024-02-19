import checker from 'vite-plugin-checker'
import VitePluginBrowserSync from 'vite-plugin-browser-sync'
import { qrcode } from 'vite-plugin-qrcode';

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
    qrcode()
  ],
}