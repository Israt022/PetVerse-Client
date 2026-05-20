"use client";

import { Button } from "@heroui/react";
import { PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsCurrencyDollar } from "react-icons/bs";
import { LuHeart, LuMapPin, LuPawPrint } from "react-icons/lu";
import { TbExternalLink } from "react-icons/tb";

const PetCard = ({ pet }) => {

    const {
        _id,
        petName,
        species,
        breed,
        age,
        gender,
        image,
        location,
        adoptionFee,
        adopted,
    } = pet;

    return (
        <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

            {/* Image */}
            <div className="relative h-64 overflow-hidden">

                <Image
                    src={image || "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBldHxlbnwwfHwwfHx8MA%3D%3D"}
                    alt={petName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Status */}
                <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md
                    ${
                        pet.adoptionStatus === "available"
                        ? "bg-green-100 text-green-700"
                        : pet.adoptionStatus === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                        {pet.adoptionStatus === "available" && "Available"}
                        {pet.adoptionStatus === "pending" && "Pending"}
                        {pet.adoptionStatus === "adopted" && "Adopted"}
                </div>

                {/* Fee */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-800 text-sm font-bold px-3 py-1 rounded-full shadow-sm">
                    {species}
                </div>

            </div>

            {/* Content */}
            <div className="p-5">

                {/* Name */}
                <div>

                    <h2 className="text-2xl font-bold text-slate-900 line-clamp-1">
                        {petName}
                    </h2>

                    <p className="text-slate-500 mt-1 flex items-center gap-1 text-sm">
                        <LuPawPrint size={15} />
                        {species} • {breed}
                    </p>

                </div>

                {/* Info */}
                <div className="flex flex-wrap gap-2 mt-5">

                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                        {age} Old
                    </span>

                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                        {gender}
                    </span>

                </div>

                <div className="flex flex-wrap justify-between items-center">
                    {/* Location */}
                    <div className="flex items-center gap-2 text-slate-500 mt-5 text-sm">

                        <LuMapPin size={16} className="text-amber-500" />

                        <span className="line-clamp-1">
                            {location}
                        </span>

                    </div>
                    {/* AdoptFee */}
                    <div className="flex items-center gap-1 text-slate-500 mt-5 text-sm">
                        <BsCurrencyDollar size={22} className="text-amber-500"/>
                        <span className="font-bold text-lg text-black">${adoptionFee}</span>
                    </div>
                </div>

                {/* Button */}
                <Link href={`/pets/${_id}`}>

                    

                </Link>
                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 mt-8">
                    <Link href={`/pets/${_id}`}>
                        <Button variant="outline" className="w-full mt-6 text-yellow-500 hover:text-white hover:bg-amber-500 text-white font-semibold py-3 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2">
                            <TbExternalLink size={18} />
                            View Details
                        </Button>
                    </Link>
                    {/* Adopt Button */}
                    {pet.adoptionStatus === "available" ? (

                        <Link href={`/pets/${_id}`}>
                            <Button className="w-full mt-6 bg-amber-400 hover:bg-amber-500 text-white font-semibold py-3 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2">
                                <PawPrint size={18} />
                                Adopt Now
                            </Button>
                        </Link>

                    ) : pet.adoptionStatus === "pending" ? (

                        <Button
                            disabled
                            className="w-full mt-6 bg-yellow-300 text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 cursor-not-allowed"
                        >
                            <PawPrint size={18} />
                            Request Pending
                        </Button>

                    ) : (

                        <Button
                            disabled
                            className="w-full mt-6 bg-gray-300 text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 cursor-not-allowed"
                        >
                            <PawPrint size={18} />
                            Already Adopted
                        </Button>

                    )}

                </div>

            </div>

        </div>
    );
};

export default PetCard;