module.exports = {
  base: "/",
  title: 'GrayFish',
  description: 'This is a blog built by VuePress',
  theme: "@vuepress/blog",
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: '编程',
        link: '/',
      },
      {
        text: '归档',
        link: '/tag/',
      },
      {
        text: '关于',
        link: '/about/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/gray-fish',
        },
      ],
      copyright: [
        {
          text: '夫唯不争，故天下莫能与之争',
          link: '',
        },
        {
          text: 'GrayFish © 2008-present ',
          link: '',
        },
      ],
    },

    // paginationComponent: 'SimplePagination'
  },
}
