"use client";
import { useState } from "react";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import Image from "next/image";

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const handleGoogleSignUp = () => {
        console.log("Google sign up clicked");
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-40 py-12">

                <div className="flex">
                    <Image
                        src="/dl.beatsnoop.png"
                        alt="Cart and a smartphone"
                        width={900}
                        height={400}
                        className="max-w-full h-auto"
                    />
                </div>


                <div className="flex-1 flex items-center p-8 lg:p-16 bg-white">
                    <div className="w-full max-w-md">
                        <div className="space-y-8">
                            <div className="text-center lg:text-left">
                                <h1 className="text-4xl font-medium text-black mb-2">
                                    Create an account
                                </h1>
                                <p className="text-black text-base">Enter your details below</p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-6">
                                    <div>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="h-12 text-base border-0 border-b-2 border-gray-200 rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-red-500 placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="text"
                                            name="email"
                                            placeholder="Email or Phone Number"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="h-12 text-base border-0 border-b-2 border-gray-200 rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-red-500 placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className="h-12 text-base border-0 border-b-2 border-gray-200 rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-red-500 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <Button
                                        type="submit"
                                        className="w-full h-12 bg-red-500 hover:bg-red-600 text-white text-base font-medium rounded-sm"
                                    >
                                        Create Account
                                    </Button>
                                    <Button
                                        type="button"
                                        onClick={handleGoogleSignUp}
                                        variant="outline"
                                        className="w-full h-12 border-gray-300 text-black text-base font-medium rounded-sm hover:bg-gray-50 flex items-center justify-center gap-3"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                                            <path
                                                fill="#4285F4"
                                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            />
                                            <path
                                                fill="#34A853"
                                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            />
                                            <path
                                                fill="#FBBC05"
                                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            />
                                            <path
                                                fill="#EA4335"
                                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            />
                                        </svg>
                                        Sign up with Google
                                    </Button>
                                </div>
                            </form>
                            <div className="text-center">
                                <span className="text-gray-600">Already have account? </span>

                                <Link href="/login" className="text-black font-medium underline hover:no-underline">
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}