import { useState } from "react";
import logo from "../../assets/images/logo.avif";
import {
    MagnifyingGlassIcon,
    MapPinIcon,
    UserIcon,
    HeartIcon,
    ShoppingBagIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const { user, loading, error } = useSelector((state) => state.auth);

    const [menuOpen, setMenuOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false); // State for My Account dropdown

    return (
        <header className="w-full">
            {/* Top Announcement Bar */}
            <div className="bg-[#7ed1c2] text-black text-sm text-center py-2 font-medium">
                Our Curated Collection Of Rings <span className="font-bold ml-2">Shop Now</span>
            </div>

            {/* Main Navbar */}
            <nav className="flex justify-between items-center px-6 lg:px-16 py-4 border-b relative">
                {/* Left Icons */}
                <div className="flex items-center gap-4">
                    <MagnifyingGlassIcon className="w-6 h-6 cursor-pointer" />
                    <MapPinIcon className="w-6 h-6 cursor-pointer" />
                    <div className="hidden md:flex items-center gap-1 cursor-pointer">
                        <UserIcon className="w-5 h-5" />
                        <span className="text-sm font-medium">Customer Service</span>
                    </div>
                </div>

                {/* Logo */}
                <img className="w-[143px]" src={logo} alt="Logo" />

                {/* Right Icons */}
                <div className="hidden md:flex items-center gap-4">
                    {/* My Account Dropdown */}
                    <div
                        className="relative flex items-center gap-1 cursor-pointer"
                        onMouseEnter={() => setAccountOpen(true)}
                        onMouseLeave={() => setAccountOpen(false)}
                    >
                        <UserIcon className="w-5 h-5" />
                        <span className="text-sm font-medium">{user && user?.fullname || 'My Account'}</span>

                        {/* Dropdown Menu */}
                        {accountOpen && (


                            user ? (<>
                                <div className="absolute z-1 top-3 left-[-2rem] w-[16rem] mt-2 bg-white shadow-lg rounded-md py-2 border border-gray-200">
                                    <Link to={'/'} className="block px-4 py-2 text-sm hover:bg-gray-100">Orders</Link>
                                    <Link to={'/'} className="block px-4 py-2 text-sm hover:bg-gray-100">Wishlist</Link>
                                    <hr className="border-gray-200" />
                                    <Link to={'/logout'} className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</Link>
                                </div>

                            </>) : (<>
                                <div className="absolute z-1 top-3 left-[-2rem] w-[16rem] mt-2 bg-white shadow-lg rounded-md py-2 border border-gray-200">
                                    <Link to={'/login'} className="block px-4 py-2 text-sm hover:bg-gray-100">Login</Link>
                                    <Link to={'/signup'} className="block px-4 py-2 text-sm hover:bg-gray-100">Register</Link>
                                </div>
                            </>)
                        )}
                    </div>

                    {/* Other Icons */}
                    <HeartIcon className="w-6 h-6 cursor-pointer" />
                    <ShoppingBagIcon className="w-6 h-6 cursor-pointer" />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <Bars3Icon className="w-8 h-8 cursor-pointer" onClick={() => setMenuOpen(true)} />
                </div>
            </nav>

            {/* Sidebar Navigation (Mobile) */}
            <div
                className={`fixed top-0 z-1 left-0 h-full w-64 bg-white shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out md:hidden`}
            >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <XMarkIcon className="w-8 h-8 cursor-pointer" onClick={() => setMenuOpen(false)} />
                </div>

                {/* Navigation Links for mobile view */}
                <nav className="flex  flex-col items-start p-6 space-y-4">
                    <Link to={'/'} className="text-lg font-medium hover:text-black border-b-2 border-transparent hover:border-gray-300 transition duration-200">Jewelry</Link>
                    <Link href={'/'} className="text-lg font-medium hover:text-black border-b-2 border-transparent hover:border-gray-300 transition duration-200">Love & Engagement</Link>
                    <Link href={'/'} className="text-lg font-medium hover:text-black border-b-2 border-transparent hover:border-gray-300 transition duration-200">Home & Accessories</Link>
                    <Link href={'/'} className="text-lg font-medium hover:text-black border-b-2 border-transparent hover:border-gray-300 transition duration-200">Men’s</Link>
                    <Link href={'/'} className="text-lg font-medium hover:text-black border-b-2 border-transparent hover:border-gray-300 transition duration-200">Gifts</Link>
                </nav>
            </div>

            {/* Overlay Background when Sidebar is Open */}
            {
                menuOpen && (
                    <div className="fixed inset-0 bg-black opacity-40 md:hidden" onClick={() => setMenuOpen(false)}></div>
                )
            }

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex justify-center gap-8 py-3 text-gray-700 font-medium">
                <Link to={'/'} className="text-lg font-medium hover:text-black border-b-2 border-transparent hover:border-[#7ed1c2] transition duration-200">Gifts</Link>
                <Link to={'/'} className="text-lg font-medium hover:text-black border-b-2 border-transparent hover:border-[#7ed1c2] transition duration-200">Jewelry</Link>
                <Link to={'/'} className="text-lg font-medium hover:text-black border-b-2 border-transparent hover:border-[#7ed1c2] transition duration-200">Love & Engagement</Link>
                <Link to={'/'} className="text-lg font-medium hover:text-black border-b-2 border-transparent hover:border-[#7ed1c2] transition duration-200">Home & Accessories</Link>
                <Link to={'/'} className="text-lg font-medium hover:text-black border-b-2 border-transparent hover:border-[#7ed1c2] transition duration-200">Men’s</Link>
            </div>
        </header >
    );
};

export default Navbar;
