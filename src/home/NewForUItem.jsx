
import newImg from "../assets/images/newImg.jpg"

function NewForUItem() {
    return (
        <div>
            <div className="relative">
                <img
                    src={newImg}
                    alt="New Arrivals"
                    className="w-full object-cover h-auto rounded-lg"
                />
                <div className="flex w-full absolute bottom-[1.5rem]  justify-center mt-4">
                    <button className="font-medium cursor-pointer bg-white text-[var(--color-primary)] border border-[var(--color-primary)] px-4 py-2 rounded-md hover:bg-[var(--color-primary)] hover:text-white transition">
                        Explore More
                    </button>
                </div>
            </div>

        </div>
    );
}

export default NewForUItem;