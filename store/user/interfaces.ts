export interface UserState {
   user: User | null
}

export interface User {
    email: string,
    firstName: string,
    gender: string,
    id: number,
    image: string,
    lastName: string,
    token: string,
    username: string
}