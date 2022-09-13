import { hopeTheme } from 'vuepress-theme-hope';

export default hopeTheme({
    hostname: "https://supermaskv.github.io",

    author: 'SuperMaskv',
    logo: '/icon.png',
    darkmode: "disable",
    iconAssets: "fontawesome",
    plugins: {
        blog: true,
    },
    navbar: [
        {
            text: "首页",
            link: "/",
            icon: "house"
        },
        {
            text: "算法",
            link: "/algorithm",
            icon: "cubes"
        },
        {
            text: "后端",
            link: "/back-end",
            icon: "code"
        },
        {
            text: "机器学习",
            link: "/machine-learning",
            icon: "diagram-project"
        },
        {
            text: "环境配置",
            link: "/dot-files",
            icon: "gear"
        }
    ],
    sidebar: {
        "/dot-files/": "structure",
        "/algorithm/": [
            {
                text: '算法',
                link: 'README.md'
            },
            {
                text: '热身',
                collapsable: true,
                children: [
                    'day1.md', 'day2.md', 'day3.md', "day4.md"
                ]
            }
        ],
        "/back-end/": "structure",
        "/machine-learning/": "structure",
    }
});