import React from "react";

const ProductPriceDetails = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="text-left p-3 text-gray-600">PRODUCT DETAILS</th>
                        <th className="text-left p-3 text-gray-600">RATE</th>
                        <th className="text-left p-3 text-gray-600">WEIGHT</th>
                        <th className="text-left p-3 text-gray-600">DISCOUNT</th>
                        <th className="text-left p-3 text-gray-600">VALUE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td className="p-3 font-semibold flex flex-col items-start  gap-3">
                            Yellow Gold <span className="text-sm text-gray-500">18KT</span>
                        </td>
                        <td className="p-1 w-[97px]">₹ 12/g</td>
                        <td className="p-3">2.030g</td>
                        <td className="p-3">-</td>
                        <td className="p-1 w-[97px]">₹ 12</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-3 font-semibold flex items-center gap-3">
                            
                            Stone
                        </td>
                        <td className="p-3">-</td>
                        <td className="p-3">0.124 ct/ 0.025g</td>
                        <td className="p-3">-</td>
                        <td className="p-1">₹ 12</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-3">Making Charges</td>
                        <td className="p-3">-</td>
                        <td className="p-3">-</td>
                        <td className="p-3">-</td>
                        <td className="p-1">₹ 12</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-3">Sub Total</td>
                        <td className="p-3">-</td>
                        <td className="p-3">2.055g Gross Wt.</td>
                        <td className="p-3">-</td>
                        <td className="p-1">₹ 12</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-3">Discount</td>
                        <td className="p-3">-</td>
                        <td className="p-3">-</td>
                        <td className="p-1 text-green-500">-₹ 12</td>
                        <td className="p-3">-</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-3">Subtotal after Discount</td>
                        <td className="p-3">-</td>
                        <td className="p-3">-</td>
                        <td className="p-3">-</td>
                        <td className="p-1">₹ 12</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-3">GST</td>
                        <td className="p-3">-</td>
                        <td className="p-3">-</td>
                        <td className="p-3">-</td>
                        <td className="p-1">₹ 12</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="font-bold text-lg">
                        <td className="p-3">Grand Total</td>
                        <td className="p-3">-</td>
                        <td className="p-3">-</td>
                        <td className="p-3">-</td>
                        <td className="p-1">₹ 12</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default ProductPriceDetails;
