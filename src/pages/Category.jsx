import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductList from "../components/product/ProductList";

function CategoryPage() {
    const { category } = useParams();
    const { items } = useSelector((state) => state.products);

    const filteredProducts = items.filter((item) => item.category === category);
    return (
        <>
            <ProductList items={filteredProducts} />
        </>
    );
}

export default CategoryPage;
