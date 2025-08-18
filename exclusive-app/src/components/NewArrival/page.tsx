"use client";
import Image from "next/image";

export default function NewArrivalSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-6 bg-red-500 rounded"></div>
        <span className="text-red-500 font-semibold">Featured</span>
      </div>

      <h2 className="text-3xl font-semibold mb-8">New Arrival</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <a
          href="#"
          className="relative aspect-[4/5] group rounded overflow-hidden bg-black"
        >
          <Image
            src="/playatation5.png"
            alt="PlayStation 5"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute bottom-6 left-6 text-white max-w-[280px]">
            <h3 className="font-semibold text-xl mb-1">PlayStation 5</h3>
            <p className="text-sm opacity-70 mb-3">
              Black and White version of the PS5 coming out on sale.
            </p>
            <span className="text-sm underline cursor-pointer">Shop Now</span>
          </div>
        </a>

        <div className="grid grid-cols-1 gap-6 lg:grid-rows-3 lg:grid-cols-1">
          <a
            href="#"
            className="relative aspect-[8/5] lg:aspect-auto group rounded overflow-hidden bg-black"
          >
            <Image
              src="/womens-collection.png"
              alt="Women's Collections"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute bottom-6 left-6 text-white max-w-[250px]">
              <h3 className="font-semibold text-lg mb-1">Women’s Collections</h3>
              <p className="text-xs opacity-70 mb-3">
                Featured woman collections that give you another vibe.
              </p>
              <span className="text-xs underline cursor-pointer">Shop Now</span>
            </div>
          </a>

          <div className="flex gap-6">
            <a
              href="#"
              className="relative aspect-square group rounded overflow-hidden bg-black flex-1"
            >
              <Image
                src="/speakers.png"
                alt="Speakers"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold text-base">Speakers</h4>
                <span className="text-xs underline cursor-pointer">Shop Now</span>
              </div>
            </a>

            <a
              href="#"
              className="relative aspect-square group rounded overflow-hidden bg-black flex-1"
            >
              <Image
                src="/perfumes.png"
                alt="Perfume"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute bottom-4 left-4 text-white max-w-[150px]">
                <h4 className="font-semibold text-base">Perfume</h4>
                <p className="text-xs opacity-70">GUCCI INTENSE-EDD EDP</p>
                <span className="text-xs underline cursor-pointer">Shop Now</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 text-center">
        <div>
          <div className="mx-auto w-14 h-14 mb-3 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17v-6a2 2 0 012-2h6l4 4v4a2 2 0 01-2 2H9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13v-2a2 2 0 012-2h3m12 7v-4h-4"
              />
              <circle cx="7" cy="18" r="2" />
              <circle cx="17" cy="18" r="2" />
            </svg>
          </div>
          <h4 className="font-semibold">FREE AND FAST DELIVERY</h4>
          <p className="text-xs text-gray-600">Free delivery for all orders over $140</p>
        </div>

        <div>
          <div className="mx-auto w-14 h-14 mb-3 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12a9 9 0 0118 0v6h-2a7 7 0 00-14 0H3v-6z"
              />
            </svg>
          </div>
          <h4 className="font-semibold">24/7 CUSTOMER SERVICE</h4>
          <p className="text-xs text-gray-600">Friendly 24/7 customer support.</p>
        </div>

        <div>
          <div className="mx-auto w-14 h-14 mb-3 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11v2m0 0v2m0-2h2m-2 0H10m2-6a9 9 0 019 9v1a11.955 11.955 0 01-6 4.5"
              />
            </svg>
          </div>
          <h4 className="font-semibold">MONEY BACK GUARANTEE</h4>
          <p className="text-xs text-gray-600">We return money within 30 days</p>
        </div>
      </div>
    </section>
  );
}
