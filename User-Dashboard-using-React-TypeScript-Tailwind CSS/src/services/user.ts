import type { User } from "../types/user";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async(): Promise<User[]> => {
    const response = await fetch(API_URL);

    if(!response.ok) {
        throw new Error("Faild to fetch users.")
    }

    return response.json()
}

export const createUser = async(user: Omit<User, "id">) : Promise<User[]> => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(user)
    })

    if(!response.ok) {
        throw new Error("Faild to create new user")
    }

    return response.json()
}