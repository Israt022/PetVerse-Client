import { FaPaw } from "react-icons/fa";


const Navbar = () => {
    return (
        <div>
            <div className="flex items-center gap-2">
                <div className="bg-amber-500 p-2 rounded-full">
                    <FaPaw className="text-slate-900 text-xl" />
                </div>

                <h1 className="text-2xl font-bold">
                    Pet<span className="text-amber-400">Verse</span>
                </h1>
            </div>
        </div>
    );
};

export default Navbar;