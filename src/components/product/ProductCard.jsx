import { useState } from "react";
import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
    console.log(product);

    const [hearted, setHearted] = useState(false)
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-[300px] md:w-[300px]">
            <div className="relative z-0">
                <img
                    src={product.images[0]?.url}
                    alt={product.name}
                    className="w-full h-48 md:h-60 object-cover rounded-md"
                />
                <button onClick={() => { setHearted(!hearted) }} className="absolute cursor-pointer top-2 right-2 text-gray-500 ">
                    {hearted ? (<i className="bi bi-heart-fill text-xl text-[red] "></i>) : (<i className="bi bi-heart text-xl "></i>)}
                </button>
            </div>
            <div className="mt-5">
                <Link to={`/item-details/${product._id}`}>
                    <h2 className="text-sm md:text-lg font-semibold">{product.name}</h2>
                </Link>
                <div className="flex items-center gap-3">
                    <p className="text-gray-700 font-bold">₹ {product.discountPrice || product?.price-100}</p>
                    {product.price && (
                        <p className="text-gray-500 line-through text-sm">₹ {product.price}</p>
                    )}
                    {product.stock <= 5 && product.stock && <p className="text-red-500 text-xs md:text-sm">{product.stock} available</p>}
                </div>
            </div>
        </div>
    );
}
