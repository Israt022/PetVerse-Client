"use client";

import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";

const DashboardSidebar = () => {

    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const {data:session} = useSession();
    const user = session?.user;
    if (!session?.user) {
        return null;
    }
    const menus = [
        {
            name: "My Requests",
            path: "/dashboard/my-requests",
        },
        {
            name: "Add Pet",
            path: "/dashboard/add-pet",
        },
        {
            name: "My Listings",
            path: "/dashboard/my-listings",
        },
    ];

    return (
        <>
            {/* Mobile Topbar */}
            <div className="lg:hidden fixed top-20 z-50 p-2 border-b bg-white">
                <button onClick={() => setOpen(true)}>
                    <MdOutlineDashboard size={28} className="cursor-pointer hover:text-yellow-500" />
                </button>
            </div>
            {/* Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                />
            )}
            {/* sidebar */}
            <div className={`
                    fixed top-0 left-0 z-40
                    w-64 min-h-screen
                    bg-white text-black border-r p-5
                    transform transition-transform duration-300

                    ${
                        open
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }

                    lg:translate-x-0
                    lg:static
                    lg:block
                `}
            >

            <div className="flex items-center gap-3 border-b pb-5">

                <Image
                    height={30}
                    width={30}
                    src={
                        user?.image ||
                        "https://i.pinimg.com/736x/4e/d1/97/4ed197d2f368fbce7e51776504fb8a70.jpg"
                    }
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400"
                />

                <div>
                    <h2 className="font-bold text-md">
                        {user?.name}
                    </h2>

                    <p className="text-sm text-gray-500 truncate">
                        {user?.email}
                    </p>
                </div>

            </div>

            <div className="mt-10 flex flex-col gap-3">

                {
                    menus.map((menu) => (

                        <Link
                            key={menu.path}
                            href={menu.path}
                            className={`
                                px-4 py-3 rounded-xl transition-all
                                ${
                                    pathname === menu.path
                                    ?
                                    "bg-gray-200 text-yellow-400"
                                    :
                                    "hover:bg-gray-300"
                                }
                            `}
                        >
                            {menu.name}
                        </Link>
                    ))
                }

            </div>

        </div>
        </>
    );
};

export default DashboardSidebar;