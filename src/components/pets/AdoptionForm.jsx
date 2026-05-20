"use client";

import { useSession } from '@/lib/auth-client';
import { postAdoption } from '@/lib/pets/data';
import { Button } from '@heroui/react';
import React from 'react';
import toast from 'react-hot-toast';

const AdoptionForm = ({pet,token}) => {
    const {data:session} = useSession();
    const user = session?.user;
    // console.log(user,"user info");
    // console.log(token);
    const {
        _id,
        petName,
    } = pet;

    const handleAdoptPet = async(e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const adoptData = Object.fromEntries(formData.entries());
        const data = {
            ...adoptData,
            petId : _id,
            userId: user?.id,
        }
        const adoption = await postAdoption(data,token);
        if(!adoption){
            toast.error("Adoption Failed!");
            return;
        }
        toast.success("Adoption successfully!");
        // console.log(adoptData,"AdoptData form data");
        // console.log(adoption,"Adopt form data");
    }
    return (
        <div>
            <form onSubmit={handleAdoptPet} className="space-y-5 mt-8">

                {/* Pet Name */}
                <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Pet Name
                    </label>

                    <input
                        type="text"
                        name="petName"
                        value={petName}
                        readOnly
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-100 text-slate-600 outline-none"
                    />
                </div>

                {/* User Name */}
                <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Your Name
                    </label>

                    <input
                        type="text"
                        name="userName"
                        value={user?.name || ""}
                        readOnly
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-100 text-slate-600 outline-none"
                    />
                </div>

                {/* User Email */}
                <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Your Email
                    </label>

                    <input
                        type="email"
                        name="userEmail"
                        value={user?.email || ""}
                        readOnly
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-100 text-slate-600 outline-none"
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Adoption Date
                    </label>

                    <input
                        type="date"
                        name="adoptionDate"
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Message
                    </label>

                    <textarea
                        rows={4}
                        name="message"
                        placeholder="Why do you want to adopt this pet?"
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                    />
                </div>

                {/* Button */}
                <Button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-2xl transition-all duration-300"
                >
                    Submit Adoption Request
                </Button>

            </form>
        </div>
    );
};

export default AdoptionForm;