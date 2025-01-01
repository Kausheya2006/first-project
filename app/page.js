import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6 text-white h-[44vh]">
        
        {/* Header Section */}
        <div className="flex gap-2 font-bold text-5xl justify-center items-center">
          Find and Assist others 
          <span>
            <img src="/search_bg.gif" width={88} alt="Search Icon" />
          </span>
        </div>
        
        {/* Description Section */}
        <div className="text-center">
          <p className="mb-2">
            Post your missing item and wait for others to alert you. In two steps:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li> Login and fill your dashboard</li>
            <li> Click on <strong>Report Here/ Report</strong></li>
          </ul>

        </div>
        
        {/* Button Links */}
        <div className="flex gap-4">
          <Link 
            href="/report" 
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Report Here
            </span>
          </Link>
          <Link 
            href="/about" 
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Read More
            </span>
          </Link>
        </div>

      </div>
    </>
  );
}
