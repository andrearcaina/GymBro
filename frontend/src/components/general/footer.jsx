import logo from '../../../public/assets/logo.png'
import Image from 'next/image'
import '../css/footer.css'
import { useState, useEffect } from 'react';
import Link from "next/link";

export default function Footer() {
    const [footerItems, setFooterItems] = useState([]);
    const [hackathonItems, setHackathonItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response1 = await fetch('/data/footer-items.json');
            const data1 = await response1.json();
            setFooterItems(data1);
            const response2 = await fetch('/data/hackathon-footer-items.json');
            const data2 = await response2.json();
            setHackathonItems(data2);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <footer class="bg-sky-950">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                <div class="pl-16 mb-6 md:mb-0">
                    <a href="#" class="flex items-center">
                        <Image src={logo} class="h-32 w-32 me-3 hover:scale-110 transition-all duration-100 ease-in-out" alt="GymBro Logo" />
                        <span class="self-center text-2xl font-bold whitespace-nowrap text-white">GymBro</span>
                    </a>
                </div>
                <div class="grid grid-cols-2 gap-16 sm:grid-cols-2">
                    <div>
                        <h2 class="text-center mb-6 text-sm font-bold text-white uppercase">Created By</h2>
                        <ul class="grid grid-cols-2 gap-x-4 gap-y-4 text-gray-400 font-medium">
                            {footerItems.map((route, index) => (
                                <li key={index} className="pl-5">
                                    <Link href={route.href} className="hover:text-white">
                                        <p className="animation">{route.text}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-bold text-white uppercase">Hackathon</h2>
                        <ul class="grid grid-row-2 gap-y-4 text-gray-400 font-medium">
                            {hackathonItems.map((route, index) => (
                                <li key={index} className="pl-5">
                                    <Link href={route.href} className="hover:text-white">
                                        <p className="animation">{route.text}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-4 border-white sm:mx-auto lg:my-6" />
            <div class="text-center">
                <span class=" text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 GymBro™. All Rights Reserved.
                </span>
            </div>
            </div>
        </footer>

    )
}