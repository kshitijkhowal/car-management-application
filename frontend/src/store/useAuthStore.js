import {create} from "zustand";
import {axiosInstance} from "axios";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api";


// export const useAuthStore = create((set,get) => ({
//     isAuthenticated: false,
//     setAuthenticated: (value) => set({isAuthenticated: value}),
//     login: async (email,password) => {
//         try {
//             const response = await axiosInstance.post("/api/token/",{
//                 email: email,
//                 password: password
//             });
//             localStorage.setItem("token",response.data.access);
//             set({isAuthenticated: true});
//             return response;
//         } catch (error) {
//             console.error("Error logging in",error);
//             throw error;
//         }
//     },
//     signup: async (data) => {
//         try {
//             const response = await axiosInstance.post("/api/users/",{
//                 email: email,
//                 password: password
//             });
//             return response;
//         } catch (error) {
//             console.error("Error signing up",error);
//             throw error;
//         }
//     },
//     logout: () => {
//         localStorage.removeItem("token");
//         set({isAuthenticated: false});
//     }
// }));
