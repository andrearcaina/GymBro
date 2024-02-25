import Link from 'next/link';
import Image from 'next/image';
import '../../css/navbar.css';
import { useState, useEffect } from 'react';
import { NavMobile } from './nav-mobile';


export default function Navbar() {
    const [NavItems, setNavItems] = useState([]);

    useEffect(() => {
        fetchNavItems();
    }, []);

    const fetchNavItems = async () => {
        try {
            const res = await fetch('/data/nav-items.json');
            const navItems = await res.json();
            setNavItems(navItems);
        } catch (error) {
            console.error("Error fetching nav-items data:", error);
        }
    };

    return (
        <nav className="shadow-xl p-4 sticky top-0 z-50 custom-font bg-sky-950">
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
                <div className="flex items-center">
                    <Link href="/">
                        <p className="flex items-center space-x-2 text-white">
                            <Image src="/assets/logo.png" alt="GymBro Logo" width={80} height={80} className="rounded-md logo-image md:w-[50px] md:h-[50px] lg:w-[80px] lg:h-[80px] h-16 w-16 hover:scale-110 transition-all duration-100 ease-in-out"/>
                            <span className="permanent-marker-regular font-bold text-5xl lg:text-4xl hover:scale-110 transition-all duration-100 ease-in-out">GymBro</span>
                        </p>
                    </Link>
                </div>

                <div className="hidden lg:flex lg:items-center lg:w-auto">
                    <div className="flex flex-col lg:flex-row lg:space-x-4">
                        {NavItems.map((route, index) => (
                            <Link href={route.href} key={index}>
                                <p className="catamaran animation text-white font-extrabold text-2xl pr-7 hover:scale-[1.15] hover:text-blue-500 transition-all duration-400">{route.text}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                <NavMobile links={NavItems} />
            </div>
        </nav>
    )
}