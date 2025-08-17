"use client";
import Image from "next/image";
import { Heart, Eye, Star } from "lucide-react";

export function BestSelling() {
    const products = [
        {
            id: 1,
            name: "The north coat",
            price: 260,
            originalPrice: 360,
            rating: 5,
            reviews: 65,
            Image: "/Frame 605.png"
        },
        {
            id: 2,
            name: "Gucci duffle bag",
            price: 960,
            originalPrice: 1160,
            rating: 4,
            reviews: 65,
            Image: "/Frame 606.png"
        },
        {
            id: 3,
            name: "RGB liquid CPU Cooler",
            price: 160,
            originalPrice: 170,
            rating: 4,
            reviews: 65,
            Image: "/Frame 610.png"
        },
        {
            id: 4,
            name: "Small BookSelf",
            price: 360,
            originalPrice: null,
            rating: 5,
            reviews: 65,
            Image: "/Frame 612.png"
        }
    ];
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
                <span className="text-red-500 font-semibold">This Month</span>
            </div>
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-4xl font-semibold text-black">Best Selling Products</h2>
                <button className="bg-red-500 text-white px-12 py-3 rounded-sm hover:bg-red-hover transition-colors">
                    View All
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                        <div className="relative bg-gray-200 rounded-sm p-8 mb-4 h-64 flex items-center justify-center">
                            <div className="absolute top-3 right-3 flex flex-col gap-2">
                                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-500 hover:text-white transition-colors">
                                    <Heart className="h-4 w-4" />
                                </button>
                                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-500 hover:text-white transition-colors">
                                    <Eye className="h-4 w-4" />
                                </button>
                            </div>

                            <div className="w-50 h-50  rounded-lg flex items-center justify-center overflow-hidden">
                                <Image
                                    src={product.Image}
                                    alt={product.name}
                                    width={100}
                                    height={100}
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
                                {product.originalPrice && (
                                    <span className="text-gray-500 line-through">${product.originalPrice}</span>
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-500 text-sm">({product.reviews})</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}