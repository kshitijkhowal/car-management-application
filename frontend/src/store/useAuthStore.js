import {create} from "zustand";
import {axiosInstance} from "../lib/axios.js";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api";


export const useAuthStore = create((set)=>({
    authUser:null,
    isAuthLoading:false,

    //user Signup
    signup:async (data)=>{
        try {
            const res=await axiosInstance.post("/auth/signup",data);
            set({authUser:res.data});
            toast.success("Sign up successfully");
        } catch (error) {
            toast.error(error.response?.data?.message || "Sign up failed");
        }
    },
    
    //user login
    login:async (data)=>{
        try {
            const res=await axiosInstance.post("/auth/login",data);
            set({authUser:res.data});
            toast.success("Login successfully");
        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed");
        }
    },

    //user logout
    logout:async ()=>{
        try {
            await axiosInstance.post("/auth/logout");
            set({authUser:null});
            toast.success("Logout successfully");
        } catch (error) {
            toast.error(error.response?.data?.message || "Logout failed");
        }
    },

}))
