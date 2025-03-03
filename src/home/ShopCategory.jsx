
import { useSelector } from "react-redux";
import LineDesign from "../assets/images/LineDesign.svg";
import CompHeader from "./CompHeader";
import ShopCatProduct from "./ShopCatProduct";
import { Link, useNavigate } from "react-router-dom";
function ShopCategory() {
    const navigate = useNavigate();
    const { items, status, error } = useSelector((state) => state.products);
    const uniqueCategories = [];
    const categoryMap = new Map();
    items?.forEach((item) => {
        if (!categoryMap.has(item.category)) {
            categoryMap.set(item.category, item.images?.[0] || "fallback.jpg");
            uniqueCategories.push({ category: item.category, image: item.images?.[0] || "fallback.jpg" });

        }
    });

    return (
        <div className="container mx-auto px-4 my-[2rem]">
            <CompHeader head="Shop By Category" desc="Browse through your favorite categories. We've got them all!" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 my-[1rem] items-center">
                {uniqueCategories.map(({ category, image }, index) => (
                    <Link to={`/category/${category}`}>
                        <ShopCatProduct key={index} category={category} image={image} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ShopCategory;
