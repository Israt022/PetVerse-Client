import { getFeaturePets } from "@/lib/pets/data";
import { LuPawPrint } from "react-icons/lu";
import FeatureCard from "./FeatureCard";
import FeatureSlider from "./FeatureSlider";


const FeaturePage = async() => {
    const features = await getFeaturePets();
    console.log(features);
    return (
        <section className="py-24 bg-gradient-to-b from-white to-yellow-50">

            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
                        <LuPawPrint />
                        Our Features
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-6">
                        Why Pet Lovers
                        <span className="text-amber-400"> Choose Us </span>
                    </h2>

                    <p className="text-slate-600 text-lg mt-6 leading-8">
                        We provide a safe, simple, and trusted platform to help you adopt the perfect pet and give them a loving home.
                    </p>
                </div>

                {/* Feature */}
                <div 
                    // className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16"
                >
                    <FeatureSlider features={features} />
                </div>

            </div>
        </section>
    );
};

export default FeaturePage;