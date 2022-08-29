import { hopeTheme } from 'vuepress-theme-hope';

export default hopeTheme({
    hostname: "https://supermaskv.github.io",

    author: 'SuperMaskv',
    logo: '/icon.png',
    darkmode: "disable",
    iconAssets: "iconfont",
    plugins: {
        blog: true,
    },
    navbar: [
        {
            text: "首页",
            link: "/",
            icon: "home"
        },
        {
            text: "环境配置",
            link: "/dot-files",
            icon: "setting"
        }
    ],
    sidebar:{
        "/dot-files/" : "structure"
    }
});