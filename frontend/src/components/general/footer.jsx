import logo from '../../../public/assets/logo.png'
import Image from 'next/image'
import '../css/footer.css'

export default function Footer() {
    return (
        <footer class="bg-sky-950">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                <div class="pl-16 mb-6 md:mb-0">
                    <a href="#" class="flex items-center">
                        <Image src={logo} class="h-32 w-32 me-3" alt="GymBro Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GymBro</span>
                    </a>
                </div>
                <div class="grid grid-cols-2 gap-16 sm:grid-cols-2">
                    <div>
                        <h2 class="text-center mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Created By</h2>
                        <ul class="grid grid-cols-2 gap-x-3 text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="https://www.linkedin.com/in/andre-arcaina/" class="animation">Andre Arcaina</a>
                            </li>
                            <li class="mb-4">
                                <a href="https://www.linkedin.com/in/felipe-quiroga-falcon/" class="animation">Felipe Quiroga</a>
                            </li>
                            <li class="mb-4">
                                <a href="https://www.linkedin.com/in/josephleung1/" class="animation">Joseph Leung</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/tristan-cheng-147715256/" class="animation">Tristan Cheng</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Hackathon</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="https://github.com/andrearcaina/GymBro" class="animation">GitHub</a>
                            </li>
                            <li class="mb-4">
                                <a href="https://nsbehacks-2024.devpost.com/" class="animation">Devpost</a>
                            </li>
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