
function ShopCatProduct({ category, image }) {

    return (
        <div className="w-full max-w-[250px] mx-auto cursor-pointer">
            <div className="flex flex-col items-center">
                <img className="w-full h-[180px] object-cover rounded-t-md shadow-md" src={image.url} alt="Category" />
                <div className="border-b border-e border-s border-gray-300 flex flex-col items-center w-full justify-center p-4 rounded-b-md shadow-sm bg-white">
                    <h3 className="mt-2 font-medium text-lg text-[var(--color-primary)]">{category}</h3>
                    <p className="text-gray-500 text-sm flex items-center gap-1 group">
                        Explore
                        <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                            <i className="bi bi-chevron-right"></i>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ShopCatProduct;
