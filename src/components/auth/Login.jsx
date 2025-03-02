import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/auth/authSlice"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, user } = useSelector((state) => state.auth);
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));

    };
    // Redirect after successful login
    useEffect(() => {
        if (user) {
            navigate("/");  // Change this to your desired route
        }
    }, [user, navigate]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                    {error && <p className="text-red-500">{error.error}</p>}

                </form>
            </div>
        </div>
    );
};

export default Login;
