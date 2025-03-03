

function ShopCollectionProduct({ collection, image }) {

    return (
        <div className="cursor-pointer bg-white shadow-md rounded-md overflow-hidden">
            <img className="w-full h-[250px] object-cover" src={image?.url} alt="Collection" />

            <div className="p-4 flex justify-between items-center">
                <h3 className="text-[var(--color-primary)] font-medium text-xl">{collection}</h3>

                <p className="text-gray-500 text-sm flex items-center gap-1 group">
                    Explore
                    <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                        <i className="bi bi-chevron-right"></i>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default ShopCollectionProduct;
