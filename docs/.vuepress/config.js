module.exports = {
  base: "/OERP-docs/",
  dest: "./dist",
  title: "OERP",
  description: "OERP 文档",
  head: [
    ["meta", {
      name: "keyword",
      content: "OERP,oerp,OERP 在线考试报名平台,OERP在线考试报名平台"
    }]
  ],
  themeConfig: {
    docsDir: 'docs',
    editLinks: true,
    smoothScroll: false,
    repoLabel: 'Github',
    editLinkText: '纠正错误',
    repo: "juzi214032/OERP",
    docsRepo: "juzi214032/OERP-docs",
    nav: [{
      text: "介绍",
      link: "/introduce.md"
    }, {
      text: "架构",
      link: "/language-specification/syntax"
    }, {
      text: "前端",
      link: ""
    }, {
      text: "后端",
      link: ""
    }]
  }
}