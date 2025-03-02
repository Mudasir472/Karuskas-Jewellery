
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/images/cro1.jpg";
import img2 from "../assets/images/cro2.webp";
import img3 from "../assets/images/cro3.webp";

const images = [
    img1,
    img2,
    img3
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goForward = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goBackward = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(goForward, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Slide ${index + 1}`} className="w-full object-cover" />
                ))}
            </div>
            <button
                onClick={goBackward}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
                <ChevronLeft />
            </button>
            <button
                onClick={goForward}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
                <ChevronRight />
            </button>
        </div>
    );
}
