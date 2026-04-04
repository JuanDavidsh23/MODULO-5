import {users} from "../data/user"

export const authenticate = (username: string, password: string) => {
    console.log("POST /auth/login")

    const user = users.find(u => u.username === username && u.password === password)

    return user || null
}