import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Logout = () => {
    const API_URL = 'https://study-mart-backend.vercel.app';
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutUser = async () => {
        const auth = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null;
        const token = auth?.token;

        try {
            await axios.get(`${API_URL}/logout`, {
                headers: { Authorization: `Bearer ${token}` },
                withCredentials: true,
            });

            localStorage.removeItem("auth");

            dispatch(logout());

            navigate("/login");
        } catch (error) {
            console.error("Logout failed:", error);
            toast.error("Logout failed. Please try again.");
        }
    };

    useEffect(() => {
        logoutUser();
    }, []); 

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
                <h2 className="text-2xl font-semibold mb-4">Logging Out...</h2>
                <p>You are being logged out. Please wait...</p>
            </div>
        </div>
    );
};

export default Logout;
