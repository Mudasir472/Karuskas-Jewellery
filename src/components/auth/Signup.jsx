import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../store/auth/authSlice";

const Signup = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        number: "",
        email: "",
        role: "",
        password: "",
        confirmPassword: ""
    });
    const [passwordError, setPasswordError] = useState(""); // State for password mismatch error
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        // Destructure form data
        const { fullname, number, email, role, password, confirmPassword } = formData;

        // Dispatch signup action
        dispatch(signupUser({ fullname, number, email, role, password, confirmPassword }));
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Number</label>
                        <input
                            type="text"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Role</label>
                        <input
                            type="text"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                        {passwordError && (
                            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                        )}
                    </div>
                    {error && (
                        <p className="text-red-500 text-sm mb-4">
                            {/* Render the error message correctly */}
                            {typeof error === 'object' ? error.error || error.message : error}
                        </p>
                    )}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    >
                        {loading ? 'Signing...' : 'Signup'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;