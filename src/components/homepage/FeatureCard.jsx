// import { LuMapPin, LuVenus, LuMars, LuHeart } from "react-icons/lu";

import { LucideMars, LucideVenus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LuHeart, LuMapPin } from "react-icons/lu";

const FeatureCard = ({feature}) => {

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
        adoptionStatus
    } = feature;

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1">

      {/* Image Section */}
      <div className="relative h-52 w-full overflow-hidden">
        {/* <img
          src={image}
          alt={petName}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        /> */}
        <Image
            src={image || "https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBldHN8ZW58MHx8MHx8fDA%3D"}
            alt={petName}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Status Badge */}
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold shadow-sm
          ${
              adoptionStatus === "available"
              ? "bg-green-100 text-green-700"
              : adoptionStatus === "pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}>
              {adoptionStatus === "available" && "Available"}
              {adoptionStatus === "pending" && "Pending"}
              {adoptionStatus === "adopted" && "Adopted"}
        </div>

        {/* Fee Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-slate-800">
          ${adoptionFee}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">

        {/* Name + Species */}
        <div>
          <h3 className="text-xl font-bold text-slate-900">{petName}</h3>
          <p className="text-sm text-slate-500">
            {species} • {breed}
          </p>
        </div>

        {/* Info Row */}
        <div className="flex flex-wrap gap-3 text-sm text-slate-600">

          <span className="px-3 py-1 bg-slate-100 rounded-full">
            Age: {age} Old
          </span>

          <span className="px-3 py-1 bg-slate-100 rounded-full flex items-center gap-1">
            {/* {gender === "Male" ? <LucideMars /> : <LucideVenus />} */}
            {gender}
          </span>

          <span className="px-3 py-1 bg-slate-100 rounded-full flex items-center gap-1">
            <LuMapPin size={14} />
            {location}
          </span>

        </div>

        {/* Button */}
        <Link href={`/pets/${_id}`}>
            <button className="w-full mt-3 flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2.5 rounded-xl transition">
                <LuHeart size={18} />
                View Details
            </button>
        </Link>

      </div>
    </div>
    );
};

export default FeatureCard;

