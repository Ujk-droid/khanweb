import Link from "next/link";
import React from "react";
import CurvedText from "./CurvedText"; // Ensure path is correct

const Insta = () => {
  return (
    <div>
      {/* Background Section */}
      <div
        className="h-[60vh] sm:h-[50vh] md:h-[60vh] lg:h-[60vh] w-full bg-cover bg-center bg-no-repeat rounded-lg transition-all duration-300
          bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-[#2b4141] dark:via-[#44667d] dark:to-[#2e3f3f]"
        style={{ backgroundImage: "url('/bg.jpg')" }} // Optional: keep or remove
      >
        {/* Content Section */}
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <CurvedText text="Our blogs" />

          <p className="text-gray-700 dark:text-gray-400 text-lg mb-6 font-body max-w-xl">
            Follow us for the latest updates and stunning laser cutting inspirations
          </p>

          <Link href="/blog">
            <button
              className="font-heading px-8 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-full shadow-lg
              shadow-gray-500 dark:shadow-gray-900 hover:shadow-gray-700 dark:hover:shadow-gray-600 transition duration-300"
            >
              Click Here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Insta;
