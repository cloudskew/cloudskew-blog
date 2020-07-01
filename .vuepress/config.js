module.exports = {
    title: 'CloudSkew blog',
    description: 'Draw AWS, Azure, GCP, Kubernetes diagrams for free',
    head: [
        ['link', { rel: 'icon', href: `/assets/cloudskew-logo.png` }], // favicon
    ],
    theme: '@vuepress/theme-blog',
    themeConfig: {

        hostname: 'https://blog.cloudskew.com', // needed for blog's sitemap

        nav: [
            { text: 'Tags', link: '/tag/' },
            { text: 'Go To CloudSkew Website', link: 'https://www.cloudskew.com' },
        ],

        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/cloudskew/cloudskew',
                },
                {
                    type: 'twitter',
                    link: 'https://twitter.com/MithunShanbhag',
                },
                {
                    type: 'mail',
                    link: 'mailto:support@cloudskew.com',
                },
                {
                    type: 'youtube',
                    link: 'https://www.youtube.com/channel/UCc4Y5F4UcCl-KoNskDqdW6w',
                },
                {
                    type: 'web',
                    link: 'https://www.cloudskew.com',
                },
            ],
            copyright: [
                {
                    text: 'Copyright: 2019-present - Skewed Ventures Private Limited',
                    link: '',
                },
            ],
        },
    },
}