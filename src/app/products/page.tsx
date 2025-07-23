"use client";

import { Filter, Search, Star, ChevronDown, X } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/projects';
import { useState } from 'react'

const categories = [
    "Web Templates",
    "SaaS Solutions",
    "AI/ML Projects",
    "Mobile Apps",
    "Dashboard UI",
    "E-commerce",
    "CMS Systems",
    "Game Templates"
]

const priceRanges = [
    { label: "Under ₹500", value: "0-500" },
    { label: "₹500 - ₹1000", value: "500-1000" },
    { label: "₹1000 - ₹1500", value: "1000-1500" },
    { label: "Over ₹1500", value: "1500-2000" }
]

const ratings = [5, 4, 3, 2, 1]

export default function ProductsPage() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [priceRange, setPriceRange] = useState<string>("")
    const [minRating, setMinRating] = useState<number>(0)
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    const toggleCategory = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        )
    }

    const filteredProducts = products.filter(product => {
        // Category filter
        if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
            return false
        }

        // Price range filter
        if (priceRange) {
            const [min, max] = priceRange.split('-').map(Number)
            if (max && (product.price < min || product.price > max)) return false
            if (!max && product.price < min) return false
        }

        // Rating filter
        if (minRating > 0 && product.rating < minRating) {
            return false
        }

        // Search filter
        if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false
        }

        return true
    })

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Our Digital Products</h1>
                    <div className="relative w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filters */}
                    <div className="lg:col-span-1">
                        <div className="lg:sticky lg:top-4">
                            <button
                                type="button"
                                className="lg:hidden flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 mb-4"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <Filter className="mr-2 h-5 w-5" />
                                Filters
                            </button>

                            <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} lg:block bg-gray-50 p-4 rounded-lg`}>
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                    {mobileFiltersOpen && (
                                        <button
                                            onClick={() => setMobileFiltersOpen(false)}
                                            className="text-gray-400 hover:text-gray-500"
                                        >
                                            <X className="h-6 w-6" />
                                        </button>
                                    )}
                                </div>

                                {/* Category filter */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                                        <ChevronDown className="mr-1 h-4 w-4" />
                                        Categories
                                    </h3>
                                    <div className="space-y-2">
                                        {categories.map((category) => (
                                            <div key={category} className="flex items-center">
                                                <input
                                                    id={`category-${category}`}
                                                    type="checkbox"
                                                    className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                                                    checked={selectedCategories.includes(category)}
                                                    onChange={() => toggleCategory(category)}
                                                />
                                                <label
                                                    htmlFor={`category-${category}`}
                                                    className="ml-3 text-sm text-gray-600"
                                                >
                                                    {category}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Price filter */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                                        <ChevronDown className="mr-1 h-4 w-4" />
                                        Price Range
                                    </h3>
                                    <div className="space-y-2">
                                        {priceRanges.map((range) => (
                                            <div key={range.value} className="flex items-center">
                                                <input
                                                    id={`price-${range.value}`}
                                                    name="price-range"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                                                    checked={priceRange === range.value}
                                                    onChange={() => setPriceRange(range.value)}
                                                />
                                                <label
                                                    htmlFor={`price-${range.value}`}
                                                    className="ml-3 text-sm text-gray-600"
                                                >
                                                    {range.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Rating filter */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                                        <ChevronDown className="mr-1 h-4 w-4" />
                                        Minimum Rating
                                    </h3>
                                    <div className="space-y-2">
                                        {ratings.map((rating) => (
                                            <div key={rating} className="flex items-center">
                                                <input
                                                    id={`rating-${rating}`}
                                                    name="min-rating"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                                                    checked={minRating === rating}
                                                    onChange={() => setMinRating(rating)}
                                                />
                                                <label
                                                    htmlFor={`rating-${rating}`}
                                                    className="ml-3 text-sm text-gray-600 flex items-center"
                                                >
                                                    {Array.from({ length: rating }).map((_, i) => (
                                                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                                    ))}
                                                    {rating < 5 && (
                                                        Array.from({ length: 5 - rating }).map((_, i) => (
                                                            <Star key={i} className="h-4 w-4 text-gray-300" />
                                                        ))
                                                    )}
                                                    <span className="ml-1">& up</span>
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                                    onClick={() => {
                                        setSelectedCategories([])
                                        setPriceRange("")
                                        setMinRating(0)
                                        setSearchQuery("")
                                    }}
                                >
                                    Clear all filters
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product grid */}
                    <div className="lg:col-span-3">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <h3 className="text-lg font-medium text-gray-900">No products found</h3>
                                <p className="mt-2 text-gray-500">
                                    Try adjusting your filters or search query
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}