import CompHeader from "./CompHeader";
import img from "../assets/images/Men.webp";
import ShopCollectionProduct from "./ShopCollectionProduct";
const image =
{
    url: img
}
function ShopByGender() {
    return (
        <div className="container mx-auto px-4 my-[3rem]">
            <CompHeader head="Shop By Gender" desc="First-class Jewellery for first-class Men, Women & Children." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ShopCollectionProduct collection="Men" image={image} />
                <ShopCollectionProduct collection="Kids" image={image} />
                <ShopCollectionProduct collection="Women" image={image} />
            </div>
        </div>
    );
}

export default ShopByGender;