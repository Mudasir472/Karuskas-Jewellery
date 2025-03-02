import LineDesign from "../assets/images/LineDesign.svg";
function CompHeader({ head, desc }) {
    return (
        <>
            <div className="heading flex flex-col items-center text-center">
                <h2 className="text-[var(--color-primary)] font-bold text-3xl">{head}</h2>
                <p className="text-gray-600">{desc}</p>
            </div>
            <img src={LineDesign} alt="" className="w-full  mx-auto my-4" />
        </>
    );
}

export default CompHeader;