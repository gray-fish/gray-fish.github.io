module.exports = {
  base: '/',
  dest: './dist',
  title: 'GRAY FISH BLOG',
  description: 'GO GO BRO',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      {
        text: '我的项目',
        items: [
          { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
          { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' },
        ]
      }
    ],
    sidebar: {
      '/blog/': [
        'git',
        'vue-amap',
        'js-function',
        'vuepress-theme',
        'vuepress',
        'vue-business-component',
        'stylus-converter',
        'click-outside',
        'json-server'
      ]
    }
  }
}