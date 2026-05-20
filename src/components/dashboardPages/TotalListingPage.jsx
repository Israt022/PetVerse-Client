import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import DeletePets from "./DeletePets";
import EditPet from "./EditPet";

const TotalListingPage = ({pets}) => {
    console.log(pets,"From total page");
    return (
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
            {
                pets.map(pet => 
                    <Card key={pet._id} className="p-4 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">

                        {/* Pet Image */}
                        <div className="relative">
                            <Image
                                src={pet?.image || "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBldHxlbnwwfHwwfHx8MA%3D%3D"}
                                alt={pet.petName}
                                width={500}
                                height={300}
                                className="w-full h-[220px] object-cover rounded-xl"
                            />

                            {/* Status Badge */}
                            <div
                                className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold
                                ${
                                    pet.adoptionStatus === "available"
                                    ? "bg-green-100 text-green-700"
                                    : pet.adoptionStatus === "pending"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-red-100 text-red-700"
                                }`}
                            >
                                {pet.adoptionStatus === "available" && "Available"}
                                {pet.adoptionStatus === "pending" && "Pending"}
                                {pet.adoptionStatus === "adopted" && "Adopted"}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="mt-4 space-y-3">

                            {/* Name + Price */}
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-gray-800">
                                    {pet.petName}
                                </h2>

                                <p className="text-lg font-semibold text-amber-500">
                                    ${pet.adoptionFee}
                                </p>
                            </div>

                            {/* Breed */}
                            <div className="flex gap-2 flex-wrap">
                                <span className="px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-xs font-medium">
                                    {pet.species}
                                </span>

                                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                    {pet.breed}
                                </span>
                            </div>

                            {/* Buttons */}
                            <div className="grid grid-cols-2 gap-3 pt-3">

                                {/* Requests */}
                                <button
                                    className="border border-yellow-400 text-yellow-500 hover:bg-yellow-500 hover:text-white font-semibold py-2 rounded-lg transition"
                                >
                                    Requests
                                </button>

                                {/* View */}
                                <Link href={`/pets/${pet._id}`}>
                                    <Button 
                                        variant="outlet"
                                        className="w-full border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-600 font-semibold py-2 rounded-lg transition"
                                    >
                                        View
                                    </Button>
                                </Link>

                                {/* Edit */}
                                <EditPet pet={pet}/>

                                {/* Delete */}
                                <DeletePets petId={pet._id}/>

                            </div>
                        </div>
                    </Card>
                )
            }
        </div>
    );
};

export default TotalListingPage;