import autoprefixer from "autoprefixer";
import path from "path";

export default {
  plugins: {
    tailwindcss: path.resolve("config/tailwind.config.js"),
    autoprefixer,
  },
};
