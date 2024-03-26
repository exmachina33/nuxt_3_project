import { defineStore } from "pinia";
import type { SignupState } from "~/store/auth/interfaces";

export const useSignupStore = defineStore({
    id: 'signup',
    state: (): SignupState => ({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        accept: false
    }),

    actions: {
        clear() {
            this.username = '';
            this.email = '';
            this.password = '';
            this.confirmPassword = '';
            this.accept = false;
        }
    },

    getters: {
        formIsCompleted(): boolean {
            return Boolean(this.username && this.password && this.confirmPassword && this.email && this.accept);
        },
        formIsEmpty(): boolean {
            return Boolean(!this.username && !this.password && !this.confirmPassword && !this.email && !this.accept);
        }
    }
})