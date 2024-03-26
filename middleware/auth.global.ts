import {useUserStore} from "~/store/user";

export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/' ) {
        return navigateTo('/login')
    }
})