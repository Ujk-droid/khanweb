"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }[];
  autoPlayInterval?: number;
  className?: string;
}

const images = [
  {
    src: "/hk.jpg",
    alt: "E commerce platform",
    title: "E commerce",
    description: "A small industry laser edge tech web site.",
  },
  {
    src: "/hw.jpg",
    alt: "Healthcare website",
    title: "Healthcare website",
    description: "An intuitive analytics website for healthcare providers.",
  },
  {
    src: "/ad.jpg",
    alt: "Admin Dashboard",
    title: "Admin Dashboard",
    description: "Data visualization and analytics.",
  },
  {
    src: "/ad.webp",
    alt: "Admin Dashboard",
    title: " Admin Dashboard",
    description: "User interface for administration.",
  },
  {
    src: "/ad2.png",
    alt: "Admin Dashboard",
    title: "Admin Dashboard",
    description: "Data visualization and analytics.",
  },
  {
    src: "/fd.jpg",
    alt: "Food Delivery website",
    title: "Food Delivery website",
    description: "A Food Delivery App.",
  },
];

export default function ImageSlider({
  images: propImages = images,
  autoPlayInterval = 5000,
  className = "",
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % propImages.length);
  }, [propImages.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, goToNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchEnd = e.touches[0].clientX;
    if (touchStart - touchEnd > 50) {
      goToNext();
    } else if (touchEnd - touchStart > 50) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + propImages.length) % propImages.length);
    }
  };

  const handleTouchEnd = () => {};

  return (
    <div
      className={`relative overflow-hidden rounded-xl mx-auto max-w-screen-lg px-4 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main slider */}
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative h-full w-full rounded-lg overflow-hidden"
          >
            <Image
              src={images[currentIndex].src || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              layout="fill"
              className={`object-contain sm:object-cover ${isImageLoaded ? "" : "opacity-0"}`}
              onLoadingComplete={() => setIsImageLoaded(true)}
            />

            {/* Caption overlay */}
            {(propImages[currentIndex].title || propImages[currentIndex].description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                {propImages[currentIndex].title && (
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {propImages[currentIndex].title}
                  </h3>
                )}
                {propImages[currentIndex].description && (
                  <p className="text-sm md:text-base text-gray-200">
                    {propImages[currentIndex].description}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {propImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
