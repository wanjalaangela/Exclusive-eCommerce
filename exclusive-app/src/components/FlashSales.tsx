"use client";
import { useState } from "react";
import Image from "next/image";
import { HeartIcon, EyeIcon } from "@heroicons/react/24/outline";
const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    oldPrice: "$160",
    discount: "-25%",
    image: "/gamepad.webp",
    rating: 4,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: "$960",
    oldPrice: "$1160",
    discount: "-20%",
    image: "/keyboard.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: "$370",
    oldPrice: "$400",
    discount: "-8%",
    image: "/screen.png",
    rating: 3,
  },
];
export default function FlashSales() {
  const [liked, setLiked] = useState<{ [key: number]: boolean }>({});
  const toggleLike = (id: number) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <section className="px-8 py-12">
     
<div className="flex items-center mb-6 ml-64">
  <div className="w-3 h-8 bg-red-600 mr-3"></div>
  <h2 className="text-1xl text-red-600 font-bold">Today’s</h2>
</div>


      <div className="flex justify-start items-center mb-6 ml-64 space-x-15">
        <h3 className="text-xl font-semibold">Flash Sales</h3>
        <div className="flex gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">03</p>
            <span className="text-sm">Days</span>
          </div>
          <div>
            <p className="text-2xl font-bold">23</p>
            <span className="text-sm">Hours</span>
          </div>
          <div>
            <p className="text-2xl font-bold">19</p>
            <span className="text-sm">Minutes</span>
          </div>
          <div>
            <p className="text-2xl font-bold">56</p>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
      </div>
     
      <div className="grid grid-cols-2 md:grid-cols-3 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-3 shadow-sm hover:shadow-md transition relative w-[200px] mx-auto"
          >

            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={180}
                height={180}
                className="rounded-md object-contain mx-auto"
              />

              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </span>

              <div className="absolute top-2 right-2 flex flex-col gap-2">

                <button
                  onClick={() => toggleLike(product.id)}
                  className="bg-white p-1 rounded-full shadow hover:bg-gray-100"
                >
                  <HeartIcon
                    className={`h-5 w-5 ${
                      liked[product.id]
                        ? "text-red-500 fill-red-500"
                        : "text-gray-600"
                    }`}
                  />
                </button>

                <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
                  <EyeIcon className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            <h4 className="mt-3 font-medium text-sm">{product.name}</h4>
            <div className="flex gap-2 items-center mt-1">
              <p className="text-red-600 font-bold text-sm">{product.price}</p>
              <p className="text-gray-500 line-through text-xs">
                {product.oldPrice}
              </p>
            </div>

            <div className="flex items-center mt-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < product.rating ? "gold" : "none"}
                  viewBox="0 0 24 24"
                  stroke="gold"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.21 6.794h7.146c.969 0 1.371 1.24.588 1.81l-5.787 4.206 2.21 6.794c.3.921-.755 1.688-1.54 1.118L12 17.77l-5.788 4.207c-.785.57-1.838-.197-1.539-1.118l2.21-6.794-5.787-4.206c-.783-.57-.38-1.81.588-1.81h7.146l2.209-6.794z"
                  />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
      
<div className="flex justify-center mt-20">
  <button className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700">
    View All Products
  </button>

      </div>
    </section>
  );
}