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
                    src={pet?.image?.startsWith("http") ? image : "https://i.pinimg.com/736x/26/e2/39/26e239adf8dbbbb024c75ab52b594292.jpg"}
                    alt={petName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Status */}
                <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md
                    ${
                        adopted
                        ? "bg-yellow-100/90 text-yellow-700"
                        : "bg-green-100/90 text-green-700"
                    }`}
                >
                    {adopted ? "Pending" : "Available"}
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
                    <Link href={`/pets/${_id}`}>
                        <Button className="w-full mt-6 bg-amber-400 hover:bg-amber-500 text-white font-semibold py-3 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2">
                            <PawPrint size={18} />
                            Adopt now
                        </Button>
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default PetCard;