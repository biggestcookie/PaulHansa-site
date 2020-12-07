import path from "path";
import { UserConfig } from "vite";

const config: UserConfig = {
  alias: {
    "/@/": path.resolve(__dirname, "./src")
  },
  sourcemap: true,
  cssPreprocessOptions: {
    scss: {
      additionalData: '@import "src/assets/styles/_variables.scss";'
    }
  }
};

export default config;
