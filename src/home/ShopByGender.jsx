import CompHeader from "./CompHeader";
import img from "../assets/images/Men.webp";
import ShopCollectionProduct from "./ShopCollectionProduct";

function ShopByGender() {
    return (
        <div className="container mx-auto px-4 my-[3rem]">
            <CompHeader head="Shop By Gender" desc="First-class Jewellery for first-class Men, Women & Children." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ShopCollectionProduct head="Men" img={img} />
                <ShopCollectionProduct head="Kids" img={img} />
                <ShopCollectionProduct head="Women" img={img} />
            </div>
        </div>
    );
}

export default ShopByGender;