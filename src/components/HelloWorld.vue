<template>
    <div class="hello">
        <h1>{{ msgZhcn }}</h1>
        <h1>{{ msg }}</h1>
        <p>有关如何配置/自定义此项目的指南和配方,<br>
            看看
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli 3.0 文档</a>.
        </p>
        <p>
            For guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <h3>
            已安装的CLI插件 <br>
            Installed CLI Plugins
        </h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
                   rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
                   rel="noopener">eslint</a></li>
        </ul>
        <h3>
            基本链接 <br>
            Essential Links
        </h3>
        <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">核心文档 Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">论坛 Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">社区聊天 Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">推特 Twitter</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">新闻 News</a></li>
        </ul>
        <h3>
            生态系统 <br>
            Ecosystem
        </h3>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank"
                   rel="noopener">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String,
            msgZhcn: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
    .hello
        h3
            margin 40px 0 0

        ul
            list-style-type none
            padding 0

        li
            display inline-block
            margin 0 10px

        a
            color #42b983
</style>
