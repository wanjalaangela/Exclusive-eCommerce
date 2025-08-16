"use client";
import Link from "next/link";
import { MagnifyingGlassIcon, ShoppingCartIcon, HeartIcon, UserIcon } from "@heroicons/react/24/outline";
export default function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          Exclusive
        </Link>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/shop" className="hover:text-black">Shop</Link>
          <Link href="/sale" className="hover:text-black">On Sale</Link>
          <Link href="/new" className="hover:text-black">New Arrivals</Link>
          <Link href="/brands" className="hover:text-black">Brands</Link>
        </nav>
        
        <div className="flex items-center gap-4">        
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="pl-10 pr-4 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-500" />
          </div>
          <button className="p-2 hover:text-black">
            <HeartIcon className="w-6 h-6" />
          </button>
          <button className="p-2 hover:text-black">
            <ShoppingCartIcon className="w-6 h-6" />
          </button>
          <button className="p-2 hover:text-black">
            <UserIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}