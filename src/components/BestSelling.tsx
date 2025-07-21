import { Link } from 'lucide-react'
import ProductCard from './ProductCard'

const bestSellingProducts = [
    {
        id: 6,
        name: 'CRM Software',
        category: 'SaaS',
        price: 149.99,
        rating: 4.9,
        image: '/products/crm-software.png'
    },
    {
        id: 7,
        name: 'E-learning Platform',
        category: 'Web App',
        price: 199.99,
        rating: 4.8,
        image: '/products/elearning.png'
    },
    {
        id: 8,
        name: 'Food Delivery App',
        category: 'Mobile App',
        price: 89.99,
        rating: 4.7,
        image: '/products/food-delivery.png'
    },
    {
        id: 9,
        name: 'Chatbot Builder',
        category: 'AI & ML',
        price: 129.99,
        rating: 4.6,
        image: '/products/chatbot.png'
    },
]

const BestSelling = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Best Selling Products</h2>
                <Link
                    href="/products"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                >
                    View All
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {bestSellingProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}

export default BestSelling