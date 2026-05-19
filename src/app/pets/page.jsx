import PetCard from '@/components/pets/PetCard';
import PetsSearchField from '@/components/pets/PetsSearchField';
import { getAllPets } from '@/lib/pets/data';
import { PawPrint } from 'lucide-react';
import React from 'react';

const PetsPage = async({searchParams}) => {
    const params = await searchParams
    console.log(params);
    const pets = await getAllPets(
        params?.search || "",
        params?.category || "",
        params?.sort || "",
    );
    return (
        <div>
            {/* heading */}
            <div className='bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50   p-10 '>
                          {/* Background Glow */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-amber-400/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-300/10 blur-3xl rounded-full"></div>

                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 text-center">
                Find Your Perfect
                <span className="text-amber-400"> Companion </span>
                </h1>

                <p className="text-center text-slate-600 mt-4 max-w-2xl mx-auto">
                Browse thousands of adorable pets and discover your new best friend. Use filters to find the perfect match for your lifestyle.
                </p>

                <PetsSearchField/>
            </div>
            
                {

                    params?.search && pets.length === 0
                    ?
                    <div className="max-w-5xl mx-auto text-center flex flex-col justify-center items-center py-20">
                        <PawPrint size={22} className='text-yellow-500' />
                        <h2 className="text-3xl font-bold text-slate-700">
                            No Pets Found 
                        </h2>

                        <p className="text-slate-500 mt-3">
                            No result found for {""}
                            <span className="font-semibold text-yellow-500">
                               {params.search}
                            </span>
                            {""}
                        </p>
                    </div>
                    :
                    <div className='max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                        {pets.map(pet => <PetCard key={pet._id} pet={pet}/>)}
                    </div>
                }
        </div>
    );
};

export default PetsPage;