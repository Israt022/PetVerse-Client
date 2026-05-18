"use client";

import { LucideHome, LucideSearchX, PawPrint } from "lucide-react";
import { useRouter } from "next/navigation";
// import { LuHome, LuSearchX } from "react-icons/lu";

const NotFoundPage = () => {
    const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-amber-50 px-6">
      <div className="text-center max-w-md">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-amber-100 text-amber-500 text-4xl">
            <LucideSearchX />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl font-extrabold text-slate-900">
          404
        </h1>

        <h2 className="text-2xl font-bold text-slate-800 mt-4">
          Page Not Found
        </h2>

        {/* Message */}
        <p className="text-slate-600 mt-4 leading-7 flex flex-col items-center">
          Oops! The page you are looking for doesn’t exist or has been moved.
          Let’s take you back home and find some adorable pets <PawPrint className="text-yellow-500"/>
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={() => router.push("/")}
            className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            <LucideHome size={18} />
            Back to Home
          </button>

          <button
            onClick={() => router.back()}
            className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
          >
            Go Back
          </button>

        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;