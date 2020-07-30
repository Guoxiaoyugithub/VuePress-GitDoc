module.exports = {
    base: '/gitdoc/',
    title: 'Git-Doc介绍文档',
    description: '~~~~~~~~~',
    configureWebpack: {
        
    },
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        // repo: 'https://github.com/Guoxiaoyugithub/ErLongShanDocument',
        repoLabel: 'GitHub',
        nav: [
            { text: '主页', link: '/' },
            {
                text: 'Link',
                items: [
                    { text: 'guowyblog', link: 'https://guowy.club' },
                ]
            },
        ],
        sidebar: [
            ['/', '首页'],

            {
                title: '效果展示',
                children: [
                    ['/gitdoc/API-interface-documentation/API-interface-documentation.md', 'API接口文档'],
                    ['/gitdoc/project-log/project-log.md', '项目日志'],
                ]
            },
            {
                title: '起步',
                children: [
                    ['/gitdoc/quick-start/quick-start.md', '快速使用'],
                    ['/gitdoc/directory-structure/directory-structure.md', '目录结构'],
                ]
            },
            {
                title: 'API文档相关组件',
                children: [
                    ['/gitdoc/d-req-request/d-req-request.md', 'd-req 请求'],
                    ['/gitdoc/d-rep-response/d-rep-response.md', 'd-rep 响应'],
                    ['/gitdoc/d-log-log/d-log-log.md', 'd-log 日志'],
                ]
            },
            {
                title: '提示相关组件',
                children: [
                    ['/gitdoc/d-tips-tips/d-tips-tips.md', 'd-tips 提示'],
                ]
            }
        ]
    }
}
