import AdoptionForm from '@/components/pets/AdoptionForm';
import { auth } from '@/lib/auth';
import { getPetsById } from '@/lib/pets/data';
import { Button, Card } from '@heroui/react';
import { Calendar, PawPrint } from 'lucide-react';
import { headers } from 'next/headers';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa6';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { TbVaccine } from 'react-icons/tb';
import { TfiMoney } from 'react-icons/tfi';

const PetsDetailsPage = async({params}) => {
    const {id} = await params;
    const {token} = await auth.api.getToken({
        headers: await headers() 
    });
    
    const pet = await getPetsById(id,token);
    const {
        _id,
        petName,
        species,
        breed,
        age,
        gender,
        image,
        healthStatus,
        vaccinationStatus,
        location,
        adoptionFee,
        description,
        ownerEmail,
        adopted,
    } = pet;
    // console.log(pet,"details");
    return (
        <div className='max-w-5xl mx-auto my-10'>
            <div className="col-span-12 grid grid-cols-12 gap-4">
                {/* Left Column: Card */}
                <div className='col-span-12 md:col-span-8'>
                    {/* Image card */}
                    <Card className="relative  h-[250px] sm:h-[300px]  md:h-[350px]">
                        <Image
                            alt="NEO Home Robot"
                            height={500}
                            width={500}
                            aria-hidden="true"
                            className="absolute inset-0 h-full w-full object-cover"
                            src={image || "https://i.pinimg.com/736x/26/e2/39/26e239adf8dbbbb024c75ab52b594292.jpg"}
                        />
                        <Card.Footer className="z-10 mt-auto flex items-end justify-between">
                        <div>
                            <div className="text-base font-medium text-yellow-500 sm:text-lg">{petName}</div>
                            <div className="text-xs font-medium text-yellow-300 sm:text-sm">${adoptionFee}</div>
                        </div>
                        <Button className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md
                        ${
                            adopted
                            ? "bg-yellow-100/90 text-yellow-700"
                            : "bg-green-300/95 border-2 border-green-300 text-green-700"
                        }`}>
                            {adopted ? "Pending" : "Available"}
                        </Button>
                        </Card.Footer>
                    </Card>
                    {/* details card */}
                    <Card>
                        {/* heading */}
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-2xl font-bold'>{petName}</h1>
                            <div className='flex flex-wrap gap-5 items-center'>
                                <span className="bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold">
                                    {species}
                                </span>
                                <span className="bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold">
                                    {breed}
                                </span>
                                <span className="bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold">
                                    {gender}
                                </span>
                            </div>
                        </div>
                        {/* Left Details */}
                        <Card className="md:col-span-2 p-6 blur-out shadow-sm shadow-yellow-300/80">

                            <h2 className="text-2xl font-bold mb-5">
                                Pet Information
                            </h2>

                            <div className="grid grid-cols-2 gap-4">

                                <div className='flex flex-wrap items-center gap-2'>
                                    <PawPrint className='text-yellow-500'/>
                                    <div>
                                        <p className="text-slate-500 text-sm">Species</p>
                                        <h3 className="font-semibold">{species}</h3>
                                    </div>
                                </div>

                                <div className='flex flex-wrap items-center gap-2'>
                                    <PawPrint className='text-yellow-500'/>
                                    <div>
                                        <p className="text-slate-500 text-sm">Breed</p>
                                        <h3 className="font-semibold">{breed}</h3>
                                    </div>
                                </div>

                                <div className='flex flex-wrap items-center gap-2'>
                                    <Calendar className='text-yellow-500'/>
                                    <div>
                                        <p className="text-slate-500 text-sm">Age</p>
                                        <h3 className="font-semibold">{age} Old</h3>
                                    </div>
                                </div>

                                <div className='flex flex-wrap items-center gap-2'>
                                    <FaRegUser  className='text-yellow-500'/>
                                    <div>
                                        <p className="text-slate-500 text-sm">Gender</p>
                                        <h3 className="font-semibold">{gender}</h3>
                                    </div>
                                </div>
                                <div className='flex flex-wrap items-center gap-2'>
                                    <CiLocationOn size={24} className='text-yellow-500'/>
                                    <div>
                                        <p className="text-slate-500 text-sm">Location</p>
                                        <h3 className="font-semibold">{location} Years</h3>
                                    </div>
                                </div>

                                <div className='flex flex-wrap items-center gap-2'>
                                    <TfiMoney size={24} className='text-yellow-500'/>
                                    <div>
                                        <p className="text-slate-500 text-sm">Fee</p>
                                        <h3 className="font-semibold">${adoptionFee}</h3>
                                    </div>
                                </div>
                                <div className='flex flex-wrap items-center gap-2'>
                                    <TbVaccine size={24} className='text-yellow-500'/>
                                    <div>
                                        <p className="text-slate-500 text-sm">Vaccine Status</p>
                                        <h3 className="font-semibold">{vaccinationStatus}</h3>
                                    </div>
                                </div>
                                <div className='flex flex-wrap items-center gap-2'>
                                    <MdOutlineHealthAndSafety size={24} className='text-yellow-500'/>
                                    <div>
                                        <p className="text-slate-500 text-sm">Health Status</p>
                                        <h3 className="font-semibold">{healthStatus}</h3>
                                    </div>
                                </div>

                            </div>

                            {/* Description */}
                            <div className="mt-6">
                                <p className="text-slate-600 leading-7">
                                {description}
                                </p>
                            </div>
                        </Card>
                    </Card>
                </div>
                {/* Right Column: Cards Stack */}
                <div className="col-span-12 flex flex-col gap-2 md:col-span-4 md:justify-between md:gap-0 md:py-2">
                    <Card className="p-6 h-fit sticky top-24">

                        {/* Heading */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">
                                Adopt {petName}
                            </h2>

                            <p className="text-slate-500 mt-2 text-sm leading-6">
                                Fill out the adoption request form and give this adorable pet a loving forever home 🐾
                            </p>
                        </div>

                        {/* Form */}
                        <AdoptionForm pet={pet} token={token}/>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PetsDetailsPage;