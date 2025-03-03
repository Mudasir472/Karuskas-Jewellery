import { useSelector } from "react-redux";
import card1 from "../../assets/images/card1.webp";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
function ProductList({ items }) {
    return (

        <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    items.map((item, index) => (
                        <ProductCard key={index} product={item} />
                    ))
                }


            </div>
        </div>
    );
}

export default ProductList;