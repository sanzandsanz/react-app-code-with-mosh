import apiClient from "./api-client";

export interface User {
    id: number;
    name: string;
}

class UserService {

    getAllUsers = () => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const request = apiClient.get("/users", { signal: signal })

        return { request, cancel: () => abortController.abort() };
    }

    deleteUser = (id: number) => {
        return apiClient.delete(`/users/${id}`);
    }

    updateUser = (id: number, user: User) => {
        return apiClient.put(`/users/${id}`, user);
    }
}

export default new UserService();