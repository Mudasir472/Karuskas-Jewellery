import LineDesign from "../assets/images/LineDesign.svg";
import CompHeader from "./CompHeader";
import NewForUItem from "./NewForUItem";
function NewForYou() {
    return (<>
        <div className="container mx-auto px-4 my-5">

            <CompHeader head="New For You!" desc="Our latest releases, just for you!" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                <NewForUItem />
                <NewForUItem />
                <NewForUItem />
            </div>
        </div>
    </>);
}

export default NewForYou;