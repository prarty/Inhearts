import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="font-sans text-2xl md:text-2xl bg-white text-black z-50 fixed w-full top-0">
            <div className="container p-2 mx-auto flex justify-between items-center relative bg-white-700 z-50">
                <Link to="/" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block text-lg font-bold">
                    <img className="h-10" src="saturn-assets/logos/logo-saturn-dark.svg" alt="" width="auto" />
                </Link>
                <div className="lg:hidden ml-auto">
                    <button className="navbar-burger flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden lg:flex lg:w-auto lg:space-x-12 items-center">
                    <li className="group relative">
                        <Link to="/"
                              className="inline-block md:text-lg text-gray-900 hover:text-orange-900 font-medium">Home</Link>
                        <div className="hidden group-hover:block absolute top-full left-0 min-w-max max-w-xs p-4 z-30">
                            {/* Dropdown content */}
                        </div>
                    </li>
                    <li>
                        <Link to="/services"
                              className="inline-block md:text-lg text-gray-900 hover:text-orange-900 font-medium">Services</Link>
                    </li>
                    <li>
                        <Link to="/portfolio"
                              className="inline-block md:text-lg text-gray-900 hover:text-orange-900 font-medium">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/about"
                              className="inline-block md:text-lg text-gray-900 hover:text-orange-900 font-medium">About
                            Us</Link>
                    </li>
                </ul>
                <div className="hidden lg:block ml-auto">
                    <div className="flex items-center">
                        <span
                              className="inline-block mr-9 md:text-lg font-semibold text-orange-900 hover:text-gray-900">+91 798434312849</span>
                        <Link to="/contact-us" className="relative group inline-block py-3 px-4 md:text-lg font-semibold text-orange-50 bg-orange-900 rounded-md overflow-hidden">
                            <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                            <span className="relative">Contact Us</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
