import Link from "next/link";

export default function GenerateRoadMap(){

    return (
        <Link href="/roadmap" className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl py-6 px-8 rounded-3xl focus:outline-none focus:shadow-outline shadow-2xl">
          Generate Your Roadmap!
        </Link>
    )
}