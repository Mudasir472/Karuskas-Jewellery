import { useSelector } from "react-redux";
import card1 from "../../assets/images/card1.webp";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
function ProductList() {
    const products = [
        {
            id: 132123,
            name: "Everyday Charm Diamond Stud Earrings",
            image: card1,
            price: 34455,
            oldPrice: 35339,
            stock: "Only 1 left!",
        },
        {
            id: 132124,
            name: "Classic Gold Hoop Earrings",
            image: card1,
            price: 28999,
            oldPrice: 29999,
            stock: "Only 2 left!",
        },
        {
            id: 132125,
            name: "Sleek Silver Stud Earrings",
            image: card1,
            price: 19999,
            oldPrice: 20999,
            stock: "In Stock",
        },
        {
            id: 132126,
            name: "Elegant Pearl Drop Earrings",
            image: card1,
            price: 24999,
            oldPrice: 25999,
            stock: "Limited Stock",
        },
        {
            id: 132127,
            name: "Stylish Diamond Hoop Earrings",
            image: card1,
            price: 39999,
            oldPrice: 41999,
            stock: "Only 3 left!",
        }
    ];
    const { items, status, error } = useSelector((state) => state.products);
    console.log(items);
    
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