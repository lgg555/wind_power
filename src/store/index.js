import { createStore } from 'vuex'
// import { user } from './user'
export default createStore({
    // modules: { user },
    state: {
        isCollapse: true,
        currentMenu: null,
        tabsList: [{
            path: '/',
            name: 'home',
            label: '首页',
            icon: 'home-filled'
        }]

    },
    mutations: {
        updateIsCollapse(state) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val) {
            //判断

            if (val.name == 'home') {
                state.currentMenu = null
            } else {
                //判断左侧点击的是否在导航栏打开，如果没有就将其打开
                state.currentMenu = val
                let result = state.tabsList.findIndex(item => item.name === val.name)
                result == -1 ? state.tabsList.push(val) : ''
            }
        },

    }
})