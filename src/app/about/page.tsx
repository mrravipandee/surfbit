"use client";

import { Code, Cpu, Users, Rocket, Shield, Globe } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <div className="pt-10 px-4 sm:px-6 lg:px-8">
                            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                <div className="sm:text-center lg:text-left">
                                    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                        <span className="block">Powering Digital</span>
                                        <span className="block text-blue-200">Transformation</span>
                                    </h1>
                                    <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                        SurfBit connects you with 100+ expert developers to deliver optimized, cutting-edge solutions for your business needs.
                                    </p>
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="rounded-md shadow">
                                            <Link
                                                href="/contact"
                                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                                            >
                                                Get Started
                                            </Link>
                                        </div>
                                        <div className="mt-3 sm:mt-0 sm:ml-3">
                                            <Link
                                                href="/products"
                                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10"
                                            >
                                                Our Products
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <div className="h-56 w-full bg-blue-500 sm:h-72 md:h-96 lg:w-full lg:h-full opacity-30">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Users size={120} className="text-white" />
                            <div className="absolute text-white text-6xl font-bold">100+</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Story */}
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Story</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            From Idea to Impact
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Founded in 2020, SurfBit began with a simple mission: connect businesses with top-tier development talent to build optimized solutions.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <Rocket className="h-8 w-8 text-blue-600 mr-3" />
                                    <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
                                </div>
                                <p className="mt-2 text-base text-gray-500">
                                    To democratize access to high-quality software solutions by leveraging our network of 100+ vetted developers across multiple technologies and domains.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <Globe className="h-8 w-8 text-blue-600 mr-3" />
                                    <h3 className="text-lg font-medium text-gray-900">Our Vision</h3>
                                </div>
                                <p className="mt-2 text-base text-gray-500">
                                    Become the go-to platform for businesses seeking optimized, cost-effective digital solutions powered by collective developer expertise.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Developer Network */}
            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Network</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            100+ Developers Strong
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            We've carefully curated a network of top development talent across specialties.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="pt-6">
                                <div className="flow-root bg-white px-6 pb-8 rounded-lg shadow h-full">
                                    <div className="-mt-6">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                                            <Code className="h-6 w-6" />
                                        </div>
                                        <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">Full-Stack Experts</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            40+ developers specializing in end-to-end solutions from frontend to backend.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <div className="flow-root bg-white px-6 pb-8 rounded-lg shadow h-full">
                                    <div className="-mt-6">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                                            <Cpu className="h-6 w-6" />
                                        </div>
                                        <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">AI/ML Specialists</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            25+ engineers focused on machine learning, computer vision, and NLP solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <div className="flow-root bg-white px-6 pb-8 rounded-lg shadow h-full">
                                    <div className="-mt-6">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                                            <Shield className="h-6 w-6" />
                                        </div>
                                        <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">DevOps & Security</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            35+ professionals ensuring optimized, secure, and scalable deployments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Optimization Approach */}
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Approach</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Optimized Solutions Process
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            How we leverage our developer network to deliver the best results.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="relative">
                            <div className="absolute left-1/2 -ml-1 h-full w-0.5 bg-gray-200"></div>

                            <div className="space-y-8">
                                {/* Step 1 */}
                                <div className="relative flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                                        1
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Requirement Analysis</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            Our senior architects analyze your needs and match them with the most suitable developers from our network.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                                        2
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Team Formation</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            We assemble a cross-functional team tailored to your project's technical requirements.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                                        3
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Solution Design</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            Our team collaboratively designs optimized architecture balancing performance, cost, and scalability.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="relative flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                                        4
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Development & Review</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            Weekly peer reviews ensure code quality and optimization throughout the development process.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 5 */}
                                <div className="relative flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                                        5
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Performance Optimization</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            Dedicated optimization phase where our experts fine-tune the solution for peak performance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-blue-700">
                <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Ready to leverage our</span>
                        <span className="block">developer network?</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-blue-200">
                        Get in touch to discuss how we can build an optimized solution for your needs.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    )
}