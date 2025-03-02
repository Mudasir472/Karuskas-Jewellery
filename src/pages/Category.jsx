import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CategoryPage() {
    const { category } = useParams();
    const { items } = useSelector((state) => state.products);

    // Filter products based on selected category
    const filteredProducts = items.filter((item) => item.category === category);

    return (
        <div className="container mx-auto px-4 my-8">
            <h2 className="text-2xl font-bold">{category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="border p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryPage;
