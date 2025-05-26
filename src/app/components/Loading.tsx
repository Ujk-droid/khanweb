

import Image from "next/image";
import { Dancing_Script } from "next/font/google"; // Importing Google Font

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"], // Adding different weights for better styling
});

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-t from-gray-800 via-gray-900 to-black z-[999]">
      <div className="flex flex-col items-center space-y-6">

        {/* Main Heading with Metallic Gold Effect */}
        <h2 className={`${dancingScript.className} text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#006A71] via-[#01949f] to-[#033135] 
          drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]`}>
          Create Your Digital Home
        </h2>

        {/* Animated Image with Golden Glow Effect */}
        <Image
          src="/logo1.jpg"
          alt="Gallery Image 1"
          width={90}
          height={90}
          className="rounded-full border-4 border-[#006A71] shadow-lg shadow-[#006A71]/50 animate-bounce"
        />

        {/* Progress Bar with Metallic Gold Animation */}
        <div className="w-64 h-2 bg-gray-700 rounded-full mt-6 overflow-hidden shadow-md">
          <div className="w-1/2 h-full bg-gradient-to-r from-[#006A71] via-[#055055] to-[#73f3f3] animate-progress" />
        </div>
      </div>
    </div>
  );
}