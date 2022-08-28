import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/",
  title: "SuperMaskv's Blog",

  lang: 'zh-CN',

  theme,
});
