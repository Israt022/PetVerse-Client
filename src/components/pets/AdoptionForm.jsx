'use client'

import { useSession } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import React from 'react';

const AdoptionForm = ({pet}) => {
    const {data:session} = useSession();
    const user = session?.user;
    console.log(session);
    const {
        petName,
    } = pet;
    return (
        <div>
            <form className="space-y-5 mt-8">

                {/* Pet Name */}
                <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Pet Name
                    </label>

                    <input
                        type="text"
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
                        value={user?.name}
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
                        value={user?.email}
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