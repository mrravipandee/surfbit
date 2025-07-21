import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ProductCard from './ProductCard'

const featuredProducts = [
    {
        id: 10,
        name: 'Portfolio Template',
        category: 'Template',
        price: 29.99,
        rating: 4.7,
        image: '/products/portfolio-template.png'
    },
    {
        id: 11,
        name: 'Task Management App',
        category: 'Mobile App',
        price: 59.99,
        rating: 4.5,
        image: '/products/task-app.png'
    },
    {
        id: 12,
        name: 'AI Image Generator',
        category: 'AI & ML',
        price: 89.99,
        rating: 4.8,
        image: '/products/ai-image.png'
    },
    {
        id: 13,
        name: 'E-commerce Template',
        category: 'Template',
        price: 39.99,
        rating: 4.6,
        image: '/products/ecommerce-template.png'
    },
]

const ProductSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
                <Link
                    href="/products"
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                    View All Products <ArrowRight size={18} className="ml-1" />
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}

export default ProductSection;