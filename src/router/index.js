import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [{
        path: '/',
        component: () =>
            import ('../view/Main.vue'),
        redirect: '/login',
        children: [{
                path: '/home',
                name: 'home',
                component: () =>
                    import ('../view/home/Home.vue'),
            },
            {
                path: '/array',
                name: 'array',
                component: () =>
                    import ('../view/home/Array.vue'),
                children: [{
                        path: '/array1',
                        name: 'array1',
                        component: () =>
                            import ('../view/home/arrays/Array1.vue'),
                    },
                    {
                        path: '/array2',
                        name: 'array2',
                        component: () =>
                            import ('../view/home/arrays/Array2.vue'),
                    },
                    {
                        path: '/array3',
                        name: 'array3',
                        component: () =>
                            import ('../view/home/arrays/Array3.vue'),
                    },
                    {
                        path: '/array4',
                        name: 'array4',
                        component: () =>
                            import ('../view/home/arrays/Array4.vue'),
                    },
                ]
            },
            {
                path: '/map',
                name: 'map',
                component: () =>
                    import ('../view/map/Map.vue'),
            },
            {
                path: '/page1',
                name: 'page1',
                component: () =>
                    import ('../view/supervise/Page1.vue'),
            },
            {
                path: '/page2',
                name: 'page2',
                component: () =>
                    import ('../view/supervise/Page2.vue'),
            },
            {
                path: '/page3',
                name: 'page3',
                component: () =>
                    import ('../view/supervise/Page3.vue'),
            },
            {
                path: '/page4',
                name: 'page4',
                component: () =>
                    import ('../view/supervise/Page4.vue'),
            },
            {
                path: '/alarm',
                name: 'alarm',
                component: () =>
                    import ('../view/alarm/Alarm.vue'),
            },
            {
                path: '/prealarm',
                name: 'prealarm',
                component: () =>
                    import ('../view/alarm/PreAlarm.vue'),
            },
            {
                path: '/workorder',
                name: 'workorder',
                component: () =>
                    import ('../view/workorder/WorkOrder.vue'),
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../view/login/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../view/register/Register.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router