import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductList from "../components/product/ProductList";

function Collections() {
    const { collections } = useParams();
    const { items } = useSelector((state) => state.products);

    const filteredProducts = items.filter((item) => item.collections === collections);
    return (
        <>
            <ProductList items={filteredProducts} />
        </>
    );
    return (<>

    </>);
}

export default Collections;