import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { sidebarItems } from "../../assets/helper/constant";



const Sidebar: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <>
            {/* Button to open sidebar */}
            <span>
                <button
                    onClick={toggleSidebar}
                    aria-controls="default-sidebar"
                    type="button"
                    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    <span className="sr-only">Open sidebar</span>
                    <Menu size={24} />
                </button>
            </span>

            {/* Sidebar */}
            <aside
                id="default-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                    {/* Close Button */}
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold w-full  ms-4">Tasks Management</h3>
                        <button
                            onClick={toggleSidebar}
                            className="absolute top-5 right-0 block md:hidden mr-4 text-gray-500 hover:text-gray-900"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    {/* Sidebar Items */}
                    <p className="text-gray-700 mb-2 mt-6">Menu</p>
                    <ul className="space-y-2 font-medium ">
                        {sidebarItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 ${isActive(item.path) ? "bg-gray-200" : ""}`}
                                >
                                    {item.icon}
                                    <span className="ms-3">{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
