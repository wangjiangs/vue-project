import Vue from "vue"
import Router from "vue-router"
const HelloWorld = resolve => require(["@/components/HelloWorld"], resolve)
const HelloWorld1 = resolve => require(["@/components/HelloWorld1"], resolve)

Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component:HelloWorld
    },{
        path: '/a',
        name: "helloworld1",
        component: HelloWorld1
    }]
})