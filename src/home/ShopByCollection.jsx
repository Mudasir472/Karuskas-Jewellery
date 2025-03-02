import ShopCollectionProduct from "./ShopCollectionProduct";
import img from "../assets/images/imgCollection.webp";
import banner from "../assets/images/offerBanner.webp"
import CompHeader from "./CompHeader";
function ShopByCollection() {
    return (
        <div className="container mx-auto px-4 my-[3rem]">
            <CompHeader head="Shop By Collections" desc="Whatever the occasion, we've got a beautiful piece of jewellery for you." />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ShopCollectionProduct head="Into Eternity" img={img}/>
                <ShopCollectionProduct head="Unbound" img={img} />
                <ShopCollectionProduct head="Engagement Rings" img={img} />
            </div>
            <img src={banner} className="object-cover cursor-pointer my-[4rem]" alt="" />
        </div>
    );
}

export default ShopByCollection;
