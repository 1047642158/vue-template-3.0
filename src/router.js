import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            // 打开页面直接引入
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // 路由级代码分裂
            // 这会为此路由生成一个单独的块（about.[hash] .js）
            // 访问路径时延迟加载。
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
// 路由守卫
router.beforeEach((to, from, next) => {
    // 路由去向判断是否可去
    // if (!to) {
    //     // 不执行
    //     next(false)
    // } else {
    //     // 不执行
        next()
    // }
})
export default router
