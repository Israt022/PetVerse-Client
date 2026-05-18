import PetCard from '@/components/pets/PetCard';
import PetsSearchField from '@/components/pets/PetsSearchField';
import { getAllPets } from '@/lib/pets/data';
import React from 'react';

const PetsPage = async() => {
    const pets = await getAllPets();
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
            <div className='max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    pets.map(pet => <PetCard key={pet._id} pet={pet}/>)
                }
            </div>
        </div>
    );
};

export default PetsPage;