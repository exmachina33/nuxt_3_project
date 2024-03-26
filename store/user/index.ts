import { defineStore } from "pinia";
import userApi from "~/api/user"
import type { LoginState } from "~/store/auth/interfaces";
import type {User, UserState} from "~/store/user/interfaces";

export const useUserStore = defineStore({
    id: 'user',
    state: (): UserState => ({
        user: null,
    }),

    actions: {
        async login({ username, password }: LoginState) {
            const response = await userApi.auth({
                username,
                password
            });
            const userData = response.data.value as User;
            if (!userData) {
                throw {
                    type: 'auth',
                    message: response.error.value
                }
            }
            this.user = userData;
            localStorage.setItem('authToken', this.user.token);
        },
        async logout() {
            this.user = null;
            localStorage.removeItem('authToken')
        }
    }
})