"use client";

import { useState } from "react";
import TotalListingPage from "@/components/dashboardPages/TotalListingPage";
import AvailablePage from "@/components/dashboardPages/AvailablePage";
import AdoptedPage from "@/components/dashboardPages/AdoptedPage";

const MyListingsClient = ({ pets }) => {

    const [activeTab, setActiveTab] = useState("total");

    const total = pets.length;

    const available = pets.filter(p => !p.adopted);
    const adopted = pets.filter(p => p.adopted);

    return (
        <div>

            {/* TOP CARDS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* div - 1 */}
                <div
                    onClick={() => setActiveTab("total")}
                    className="py-5 px-3 rounded-md bg-white shadow-sm flex-col gap-2"
                >
                    <h1 className="text-2xl text-yellow-500 font-bold">{total || 0}</h1>
                    <p className="text-gray-500 font-bold">Total Listings</p>
                </div>
                {/* div - 2 */}
                <div
                    onClick={() => setActiveTab("available")}
                    className="py-5 px-3 rounded-md bg-white shadow-sm flex-col gap-2"
                >
                    <h1 className="text-2xl font-bold text-green-500">{available.length}</h1>
                    <p className="text-gray-500 font-bold">Available</p>
                </div>
                {/* div - 3 */}
                <div 
                    onClick={() => setActiveTab("adopted")}
                    className="py-5 px-3 rounded-md bg-white shadow-sm flex-col gap-2"
                >
                    <h1 className="text-2xl font-bold text-red-500">{adopted.length}</h1>
                    <p className="text-gray-500 font-bold">Adopted</p>
                </div>
            </div>

            {/* CONTENT */}
            {activeTab === "total" && (
                <TotalListingPage pets={pets} />
            )}

            {activeTab === "available" && (
                <AvailablePage pets={available} />
            )}

            {activeTab === "adopted" && (
                <AdoptedPage pets={adopted} />
            )}

        </div>
    );
};

export default MyListingsClient;