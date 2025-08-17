"use client";
import Image from "next/image";
import { Heart, Eye, Star } from "lucide-react";

export function ExploreProducts() {
  const products = [
    {
      id: 1,
      name: "Breed Dry Dog Food", // No two dots to remove here, so unchanged
      price: 100,
      rating: 3,
      reviews: 35,
      image: "/Frame 604 (3).png",
      isNew: false,
    
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      price: 360,
      rating: 4,
      reviews: 95,
      image: "/Frame 604 (1).png",
      isNew: false,
     
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      price: 700,
      rating: 5,
      reviews: 325,
      image: "/Frame 604 (2).png",
      isNew: false,

    },
    {
      id: 4,
      name: "Curology Product Set",
      price: 500,
      rating: 4,
      reviews: 145,
      image: "/facecream.avif",
      isNew: false,

    },
    {
      id: 5,
      name: "Kids Electric Car",
      price: 960,
      rating: 5,
      reviews: 65,
      image: "/Benz.png",
      isNew: true,
      colors: ["#EEFF61", "#FB1314"],
    },
    {
      id: 6,
      name: "Jr. Zoom Soccer Cleats",
      price: 1160,
      rating: 5,
      reviews: 35,
      image: "/Frame 608.png",
      isNew: false,
      colors: ["#EEFF61", "#FB1314"],
    },
    {
      id: 7,
      name: "GP11 Shooter USB Gamepad",
      price: 660,
      rating: 4,
      reviews: 55,
      image: "/Frame 608 (1).png",
      isNew: true,
      colors: ["#000000", "#FB1314"],
    },
    {
      id: 8,
      name: "Quilted Satin Jacket",
      price: 660,
      rating: 4,
      reviews: 55,
      image: "/Frame 608 (2).png",
      isNew: false,
      colors: ["#184A48", "#FB1314"],
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
        <span className="text-red-500 font-semibold">Our Products</span>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-semibold text-black">Explore Our Products</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative bg-gray-200 rounded-sm p-8 mb-4 h-64 flex items-center justify-center">
              {product.isNew && (
                <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-sm text-sm">
                  NEW
                </div>
              )}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-500 hover:text-white transition-colors">
                  <Heart className="h-4 w-4" />
                </button>
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-500 hover:text-white transition-colors">
                  <Eye className="h-4 w-4" />
                </button>
              </div>
              <div className="w-40 h-40 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={120} // Increased size
                  height={120} // Increased size
                  className="object-contain"
                />
              </div>
              <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Add To Cart
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-black">{product.name}</h3>
              <div className="flex items-center gap-3">
                <span className="text-red-500 font-medium">${product.price}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">({product.reviews})</span>
              </div>

              {product.colors && (
                <div className="flex items-center gap-2 pt-1">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-5 h-5 rounded-full border-2 border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-red-500 text-white px-12 py-3 rounded-sm hover:bg-red-hover transition-colors">
          View All Products
        </button>
      </div>
    </div>
  );
}
