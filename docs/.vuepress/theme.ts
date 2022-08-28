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
            text: "dot files",
            link: "/dot-files",
            icon: "setting"
        }
    ]
});