import ShopCollectionProduct from "./ShopCollectionProduct";
import img from "../assets/images/imgCollection.webp";
import banner from "../assets/images/offerbanner.webp"
import CompHeader from "./CompHeader";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function ShopByCollection() {
    const { items, status, error } = useSelector((state) => state.products);
    const uniqueCollection = [];
    const collectionMap = new Map();
    items?.forEach((item) => {
        if (item.collections && !collectionMap.has(item.collections)) {
            collectionMap.set(item.collections, item.images?.[0] || "fallback.jpg");
            uniqueCollection.push({ collections: item.collections, image: item.images?.[0] || "fallback.jpg" });
        }
    });

    return (
        <div className="container mx-auto px-4 my-[3rem]">
            <CompHeader head="Shop By Collections" desc="Whatever the occasion, we've got a beautiful piece of jewellery for you." />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* <ShopCollectionProduct head="Into Eternity" img={img} />
                <ShopCollectionProduct head="Unbound" img={img} />
                <ShopCollectionProduct head="Engagement Rings" img={img} /> */}
                {
                    uniqueCollection.map(({ collections, image }, indexx) => (

                        <Link to={`/collection/${collections}`}>
                            {console.log(image)
                            }
                            <ShopCollectionProduct key={indexx} collection={collections} image={image} />
                        </Link>

                    ))
                }
            </div>
            <img src={banner} className="object-cover cursor-pointer my-[4rem]" alt="" />
        </div>
    );
}

export default ShopByCollection;
