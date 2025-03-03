import { useState } from "react";

export default function ProductAccordion({ product,openSections, toggleSection }) {
    const sections = [
        {
            key: "Metal", icon: "🪙", title: "METAL DETAILS", content: (
                <div className="grid grid-cols-2 gap-[1rem] text-gray-700 mt-3">
                    <p><strong>18K</strong><br />Karatage</p>
                    <p><strong>Rose</strong><br />Material Colour</p>
                    <p><strong>{product?.material}</strong><br />Metal</p>
                    <p><strong>2.4 cm</strong><br />Earring Height</p>
                    <p><strong>1.5 cm</strong><br />Earring Width</p>
                    <p><strong>{product?.weight}</strong><br />Gross Weight</p>
                </div>
            )
        },
        { key: "Diamond", icon: "💎", title: "DIAMOND DETAILS", content: <p>Diamond details: Clarity, Cut, and Carat.</p> },
        { key: "General", icon: "💍", title: "GENERAL DETAILS", content: <p>General information about the product.</p> },
        { key: "Description", icon: "📜", title: "DESCRIPTION DETAILS", content: <p>This is a beautifully crafted piece of jewellery.</p> },
    ];

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            {sections.map(({ key, icon, title, content }) => (
                <div key={key} className="border-b py-3 cursor-pointer">
                    <div className="flex justify-between items-center" onClick={() => toggleSection(key)}>
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <span>{icon}</span> {title}
                        </h3>
                        <span className="text-gray-500 transition-transform duration-300"
                            style={{ transform: openSections[key] ? "rotate(180deg)" : "rotate(0deg)" }}>
                            <i className="bi bi-chevron-down"></i>
                        </span>
                    </div>
                    {openSections[key] && <div className="mt-3 text-gray-600 pl-4">{content}</div>}
                </div>
            ))}
        </div>
    );
}
