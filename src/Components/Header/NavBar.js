import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const activeStyle = {
        color: "#f35a38",
        fontWeight: "bold",
        borderBottom: "1px solid #f35a38",
    };
    const menuItems = [
        { name: "Home", href: "/" },
        { name: "Dashboard", href: "/dashboard" },
        { name: "Reviews", href: "/reviews" },
        { name: "Blog", href: "/blog" },
        { name: "Pricing", href: "/pricing" },
        { name: "Contact", href: "/contact" },
    ];
    return (
        <nav className="flex flex-wrap justify-between items-center container mx-auto pt-8 pb-12">
            <Link to="/" className="flex items-center">
                <span className="self-center text-xl lg:text-2xl font-bold transition text-title whitespace-nowrap">
                    The Digital <span className="text-secondary">Dudes</span>
                </span>
            </Link>
            <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    {menuItems.map((menu, index) => (
                        <li key={index}>
                            <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to={menu.href} className="block py-2 pr-4 pl-3 text-gray-700 md:hover:bg-transparent md:hover:text-secondary md:p-0">
                                {menu.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
