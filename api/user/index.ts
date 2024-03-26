import type {LoginPayload} from "~/api/user/interfaces";

export default {
    async auth(payload: LoginPayload) {
        return await useFetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    },
    async getAuthUser(token: string) {
        return await useFetch('https://dummyjson.com/auth/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
    }
}