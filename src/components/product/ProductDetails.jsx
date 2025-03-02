/**
 * The `ProductDetails` function in JavaScript React renders a product page with tabs for displaying
 * product details and price breakup along with images and accordion components.
 * @returns The `ProductDetails` component is being returned. It contains JSX elements for displaying
 * product details including images, product name, price, tabs for switching between product details
 * and price breakup, and sections for displaying either product details or price details based on the
 * active tab state.
 */

import { useState } from "react";
import img1 from "../../assets/images/img2.webp";
import img2 from "../../assets/images/card1.webp";
import { useParams } from "react-router-dom";
import ProductPriceDetails from "./ProductPriceDetails";
import ProductAccordion from "./ProductAccordion";

export default function ProductDetails() {
    const [activeTab, setActiveTab] = useState("product");
    const [openSections, setOpenSections] = useState({ Metal: true });
    const { id } = useParams();
    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section], // Toggle the section
        }));
    };

    return (
        <div className="container mx-auto p-4">
            <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800">Everyday Charm Diamond Stud Earrings</h3>
                <p className="text-lg text-[#660000] font-semibold mt-1">₹34,455<span className="bg-[linear-gradient(90.18deg,#832729_0.17%,#631517_99.86%)] cursor-pointer ms-4  p-[7px] font-medium rounded-lg text-white">Add to Cart</span></p>
            </div>

            <div className="flex justify-center gap-3 mt-4 flex-wrap">
                <img src={img1} alt="Jewellery" className="w-full sm:w-[48%] lg:w-[46%] max-h-[26rem] h-auto rounded-lg shadow-md object-cover" />
                <img src={img2} alt="Jewellery" className="w-full sm:w-[48%] lg:w-[46%] max-h-[26rem] h-auto rounded-lg shadow-md object-cover" />
            </div>


            <div className="mt-6">
                <h1 className="text-3xl font-semibold text-center text-gray-800">Jewellery Details</h1>
                {/* Tabs Here */}
                <div className="flex justify-center gap-4 mt-4">
                    <button
                        className={`px-6 py-2 cursor-pointer text-lg font-medium rounded-full transition-all ${activeTab === "product" ? "bg-[#660000] text-white shadow-md" : "bg-gray-100 text-gray-700"
                            }`}
                        onClick={() => setActiveTab("product")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`px-6 cursor-pointer py-2 text-lg font-medium rounded-full transition-all ${activeTab === "price" ? "bg-[#660000] text-white shadow-md" : "bg-gray-100 text-gray-700"
                            }`}
                        onClick={() => setActiveTab("price")}
                    >
                        Price Breakup
                    </button>
                </div>

                {/* Product Details Section */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeTab === "product" ? (
                        <ProductAccordion openSections={openSections} toggleSection={toggleSection} />
                    ) : (
                        <ProductPriceDetails />
                    )}

                    {/* right sided Image */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <img src={img1} alt="Jewellery" className="w-full h-auto object-cover mt-4 rounded-lg" />
                    </div>
                </div>

            </div>
        </div>
    );
}
