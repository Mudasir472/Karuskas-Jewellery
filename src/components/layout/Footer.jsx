
const Footer = () => {
    return (
        <footer className="bg-[#efe3e3] text-gray-800 py-10 px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">Useful Links</h3>
                    <ul className="space-y-2">
                        {['Delivery Information', 'International Shipping', 'Payment Options', 'Track your Order', 'Returns', 'Find a Store'].map((link) => (
                            <li key={link} className="hover:underline text-black hover:font-medium cursor-pointer">{link}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">Information</h3>
                    <ul className="space-y-2">
                        {['Careers', 'Blog', 'Offers & Contest Details', 'Help & FAQs', 'About Karushka'].map((info) => (
                            <li key={info} className="hover:underline text-black hover:font-medium cursor-pointer">{info}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">Contact Us</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <a href="mailto:support@example.com" className="hover:underline flex items-center">
                                <span className="text-xl me-2">
                                    <i className="bi bi-envelope text-2xl"></i>
                                </span>
                                Write to Us</a>
                        </li>

                        <li className="flex items-center gap-2">
                            <a href="tel:18002660123" className="hover:underline flex items-center">
                                <span className="text-xl me-2">
                                    <i className="bi bi-telephone text-2xl"></i>
                                </span>
                                1800-266-0123</a>
                        </li>

                        <li className="flex items-center gap-2">
                            <a href="#" className="hover:underline flex items-center">
                                <span className="text-xl me-2">
                                    <i className="bi bi-chat text-2xl"></i>
                                </span>
                                Chat with Us</a>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center">
                <div className="flex space-x-4">
                    {['VISA', 'MasterCard', 'PayPal', 'Maestro', 'RuPay', 'Axis Bank', 'ICICI Bank', 'Diners Club'].map((payment) => (
                        <span key={payment} className="text-gray-600 text-sm">{payment}</span>
                    ))}
                </div>

                <div className="flex space-x-4 mt-4 md:mt-0">
                    <span className="text-xl cursor-pointer"><i class="bi bi-facebook text-2xl text-[#1877F2]"></i></span>
                    <span className="text-xl cursor-pointer"><i class="bi bi-instagram text-2xl text-[#E4405F]"></i></span>
                    <span className="text-xl cursor-pointer"><i class="bi bi-twitter-x text-2xl text-[#000000]"></i></span>
                </div>
            </div>

            <div className="text-center text-sm text-gray-600 mt-6">
                © 2025 Titan Company Limited. All Rights Reserved. <br />
                <span className="hover:underline cursor-pointer">Terms & Conditions</span> |
                <span className="hover:underline cursor-pointer"> Privacy Policy</span> |
                <span className="hover:underline cursor-pointer"> Disclaimer</span>
            </div>
        </footer>
    );
};

export default Footer;
