"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
const heroImages = ["/hero1.png", "/hero2.jpg", "/hero3.jpg"];
export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full h-[470px] overflow-hidden ">

      <Image
        src={heroImages[currentIndex]}
        alt="Hero Banner"
        fill
        className="object-cover transition-all duration-700 translate-y-8"
        priority
      />
     
      <div className="absolute top-1/2 left-12 text-white space-y-4 translate-y-8">
        <h2 className="text-5xl font-bold">Up to 10% <br></br>off Voucher</h2>
        <a
          href="#"
          className="inline-flex items-center text-lg font-semibold hover:text-gray-200 underline"
        >
          Shop Now  →
        </a>
      </div>
   
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}