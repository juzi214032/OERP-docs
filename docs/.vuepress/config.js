module.exports = {
  base: "/oerp-docs/",
  dest: "./dist",
  title: "OERP",
  description: "OERP 文档",
  head: [
    ["meta",{
      name:"keyword",
      content:"OERP,oerp,OERP 在线考试报名平台,OERP在线考试报名平台"
    }]
  ],
  themeConfig: {
    docsDir: 'docs',
    editLinks: true,
    smoothScroll: false,
    repoLabel: 'Github',
    editLinkText: '纠正错误',
    repo: "juzi214032/OERP",
    docsRepo:"juzi214032/OERP-docs",
    nav: [{
      text: "快速开始",
      link: "/getting-started/download-groovy.md"
    }, {
      text: "文档",
      link: "/language-specification/syntax"
    }]
  }
}