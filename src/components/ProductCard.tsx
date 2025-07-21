import { Star } from 'lucide-react'
import Link from 'next/link'

interface Product {
    id: number
    name: string
    category: string
    price: number
    rating: number
    image: string
}

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover h-full w-full"
                />
            </div>
            <div className="p-4">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {product.category}
                </span>
                <h3 className="font-semibold text-lg mt-2 mb-1">{product.name}</h3>
                <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-1">{product.rating}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    <Link
                        href={`/products/${product.id}`}
                        className="text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;