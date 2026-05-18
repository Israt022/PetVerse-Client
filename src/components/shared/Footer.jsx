import Link from "next/link";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaPaw } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
                <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-black text-gray-300 overflow-hidden">

                {/* Background Glow */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-amber-400/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-300/10 blur-3xl rounded-full"></div>

                <div className="max-w-7xl mx-auto px-6 py-14">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    
                    {/* Logo + Description */}
                    <div>
                        <div className="relative flex items-center gap-2 mb-4">
                            <div className="bg-amber-400 p-2 rounded-full">
                                <FaPaw className="text-slate-900 text-xl" />
                            </div>

                            <h1 className="absolute top-2 left-6 text-2xl font-bold text-white">
                                Pet<span className="text-amber-400">Verse</span>
                            </h1>
                        </div>

                        <p className="text-sm leading-6">
                        PetVerse helps loving pets find their forever homes with care,
                        compassion, and trusted adoption services.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-4">
                        Quick Links
                        </h2>

                        <ul className="space-y-3">
                        <li>
                            <Link
                            href="/"
                            className="hover:text-amber-400 transition-colors"
                            >
                            Home
                            </Link>
                        </li>

                        <li>
                            <Link
                            href="/pets"
                            className="hover:text-amber-400 transition-colors"
                            >
                            All Pets
                            </Link>
                        </li>

                        <li>
                            <Link
                            href="/dashboard/add-pet"
                            className="hover:text-amber-400 transition-colors"
                            >
                            Add Pet
                            </Link>
                        </li>

                        <li>
                            <Link
                            href="/dashboard/my-requests"
                            className="hover:text-amber-400 transition-colors"
                            >
                            My Requests
                            </Link>
                        </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-4">
                        Contact Info
                        </h2>

                        <ul className="space-y-3 text-sm">
                        <li>Email: support@petverse.com</li>
                        <li>Phone: +880 1234-567890</li>
                        <li>Location: Dhaka, Bangladesh</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-4">
                        Follow Us
                        </h2>

                        <div className="flex items-center gap-4">
                        
                        <a
                            href="#"
                            className="bg-slate-800 p-3 rounded-full hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            className="bg-slate-800 p-3 rounded-full hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            className="bg-slate-800 p-3 rounded-full hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="#"
                            className="bg-slate-800 p-3 rounded-full hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
                        >
                            <FaLinkedinIn />
                        </a>

                        </div>
                    </div>
                    </div>

                    {/* Bottom */}
                    <div className="border-t border-slate-700 mt-12 pt-6 text-center text-sm">
                    <p>
                        © 2026 <span className="text-amber-400 font-semibold">PetVerse</span>. All rights reserved.
                    </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;