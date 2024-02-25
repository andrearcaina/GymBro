import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
    return (
        <div className="">
            <div className="max-w-md mx-auto">
                <h2 className='text-center bg-sky-700 text-white font-bold rounded-3xl text-xl p-5 m-5 shadow-xl bg-contain'>Our Motivation</h2>
            </div>

            <p className="rounded-3xl text-center text-lg p-10 m-5 bg-gray-200 shadow-xl">When we first started our fitness journey, the biggest roadblock we all encountered was not knowing where to begin. We needed help figuring out which exercises to do and what foods to eat. Even with research, the abundance of resources made it overwhelming to choose a direction. Creating a simple schedule to stick to proved crucial in keeping us motivated, ultimately inspiring us to create GymBro.</p>
            <hr class="my-4 border-gray-500 sm:mx-auto lg:my-6 w-1/2"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

                <div className="bg-gray-200 shadow-md rounded p-4 ml-3">
                    <h2 className="text-xl font-semibold mb-2">Daily Workout Routines</h2>
                    <p className="text-gray-700">Fill out the form to receive a personalized map of workout routines for a week catered towards achieving your future goals!</p>
                </div>

                <div className="bg-gray-200 shadow-md rounded p-4 mr-3">
                    <h2 className="text-xl font-semibold mb-2">Daily Meal Plans for Breakfast, Lunch, & Dinner</h2>
                    <p className="text-gray-700">Recommends delicious recipes for the week to maintain a healthy and nutritious diet to maintain workout progress and boost your growth!</p>
                </div>

            </div>

            <hr class="my-4 border-gray-500 sm:mx-auto lg:my-6 w-1/2"/>

            <div className='max-w-xs mx-auto'>
                <h2 className='text-center bg-sky-900 text-white font-bold rounded-3xl text-xl p-5 m-5 shadow-xl bg-contain'>The Team</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-[3rem]">
                <Link href="https://www.linkedin.com/in/andre-arcaina/" className="cursor-pointer bg-sky-800 p-10 hover:shadow-md hover:scale-105 transition-transform rounded-lg">
                    <Image src="/images/andre.png" width={400} height={400} alt="Andre" className="mb-2 rounded-full mx-auhref w-40 h-40" />
                    
                    <h2 className="text-lg text-white font-semibold mb-2">Andre</h2>
                    
                    <p className="mb-2 text-white">2nd yr TMU CS student!</p>
                    <p className="text-gray-300">Gym Spectator / Future Enjoyer</p>
                    <br />
                    <p className="text-gray-300">Role: Fullstack Developer</p>
                </Link>
                
                <Link href="https://www.linkedin.com/in/felipe-quiroga-falcon/" className="cursor-pointer bg-sky-800 p-10 hover:shadow-md hover:scale-105 transition-transform rounded-lg">
                    <Image src="/images/felipe.png" width={400} height={400} alt="Felipe" className="mb-2 rounded-full mx-auhref w-40 h-40" />
                    
                    <h2 className="text-lg text-white font-semibold mb-2">Felipe</h2>
                    
                    <p className=" mb-2 text-gray-300">2nd yr TMU CS student!</p>
                    <p className="text-gray-300">Tennis / Gym Enthusiast</p>
                    <br />
                    <p className="text-gray-300">Role: Frontend Developer</p>
                </Link>
                
                <Link href="https://www.linkedin.com/in/tristan-cheng-147715256/" className="cursor-pointer bg-sky-800 p-10 hover:shadow-md hover:scale-105 transition-transform rounded-lg">
                    <Image src="/images/tristan.png" width={400} height={400} alt="Tristan" className="mb-2 rounded-full mx-auhref w-40 h-40" />
                    
                    <h2 className="text-lg text-white font-semibold mb-2 ">Tristan</h2>
                    
                    <p className="text-gray-300 mb-2">2nd yr TMU CS student!</p>
                    <p className="text-gray-300">Gym Enjoyer</p>
                    <br />
                    <p className="text-gray-300">Role: Frontend Developer</p>
                </Link>
                
                <Link href="https://www.linkedin.com/in/josephleung1/" className="cursor-pointer bg-sky-800 p-10 hover:shadow-md hover:scale-105 transition-transform rounded-lg">
                    <Image src="/images/joseph.png" width={400} height={400} alt="Joseph" className="mb-2 rounded-full mx-auto w-40 h-40" />
                    
                    <h2 className="text-lg text-white font-semibold mb-2">Joseph</h2>
                    
                    <p className="text-gray-300 mb-2">2nd yr TMU CS student!</p>
                    <p className="text-gray-300">Gym Sensei</p>
                    <br />
                    <p className="text-gray-300">Role: Backend Developer</p>
                </Link>
            </div>
        </div>
    );
};