"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import ProductCard from './ProductCard'

const products = [
    {
        id: 1,
        name: 'E-commerce Dashboard',
        category: 'Web App',
        price: 49.99,
        rating: 4.8,
        image: '/products/ecommerce-dashboard.png'
    },
    {
        id: 2,
        name: 'AI Content Generator',
        category: 'AI & ML',
        price: 79.99,
        rating: 4.9,
        image: '/products/ai-content.png'
    },
    {
        id: 3,
        name: 'Fitness Mobile App',
        category: 'Mobile App',
        price: 59.99,
        rating: 4.7,
        image: '/products/fitness-app.png'
    },
    {
        id: 4,
        name: 'Project Management Tool',
        category: 'SaaS',
        price: 99.99,
        rating: 4.6,
        image: '/products/project-management.png'
    },
    {
        id: 5,
        name: 'Social Media Dashboard',
        category: 'Web App',
        price: 69.99,
        rating: 4.5,
        image: '/products/social-dashboard.png'
    },
]

const TrendingProducts = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 4 ? 0 : prevIndex + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 4 : prevIndex - 1
        )
    }

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Trending Products</h2>
                <div className="flex space-x-2">
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 25}%)` }}
                >
                    {products.map((product) => (
                        <div key={product.id} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TrendingProducts;