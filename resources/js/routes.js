

const Home = () => import('./components/Home.vue' /* webpackChunkName: "resource/js/components/home" */)
const ItemsDisplay = () => import('./components/items/Display.vue' /* webpackChunkName: "resource/js/components/items/display" */)
const ItemsCreate = () => import('./components/items/Add.vue' /* webpackChunkName: "resource/js/components/items/add" */)
const ItemsEdit = () => import('./components/items/Edit.vue' /* webpackChunkName: "resource/js/components/items/edit" */)

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'itemsDisplay',
        path: '/items',
        component: ItemsDisplay
    },
    {
        name: 'itemsEdit',
        path: '/items/:id/edit',
        component: ItemsEdit
    },
    {
        name: 'itemsAdd',
        path: '/items/add',
        component: ItemsCreate
    }
]