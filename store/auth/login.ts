import { defineStore } from "pinia";
import type { LoginState } from "~/store/auth/interfaces";
import userApi from "~/api/user"

export const useLoginStore = defineStore({
    id: 'login',
    state: (): LoginState => ({
        username: '',
        password: ''
    }),

    actions: {
        async login() {
            const user = await userApi.auth({
                username: this.username,
                password: this.password
            })
        }
    },
    getters: {
        formIsCompleted(state) {
            return Boolean(this.username && this.password);
        }
    }
})