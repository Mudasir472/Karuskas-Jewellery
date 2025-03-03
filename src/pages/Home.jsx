import ProductList from "../components/product/ProductList";
import Carousel from "../home/Carousel"
import NewForYou from "../home/NewForYou";
import ShopByCollection from "../home/ShopByCollection";
import ShopByGender from "../home/ShopByGender";
import ShopCategory from "../home/ShopCategory"
function Home() {
    return (
        <div >
            <Carousel />
            <ShopCategory />
            <ShopByCollection />
            <NewForYou />
            <ShopByGender />
        </div>
    );
}

export default Home;
