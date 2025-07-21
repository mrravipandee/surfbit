import Link from 'next/link'

const categories = [
    { name: 'Web App', icon: '💻', count: 124 },
    { name: 'Mobile App', icon: '📱', count: 89 },
    { name: 'AI & ML', icon: '🤖', count: 56 },
    { name: 'Games', icon: '🎮', count: 42 },
    { name: 'SaaS', icon: '☁️', count: 78 },
    { name: 'Templates', icon: '📄', count: 112 },
]

const CategoryCards = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse Categories</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {categories.map((category) => (
                    <Link
                        key={category.name}
                        href={`/categories/${category.name.toLowerCase().replace(' ', '-')}`}
                        className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="text-3xl mb-2">{category.icon}</div>
                        <h3 className="font-medium text-gray-900">{category.name}</h3>
                        <p className="text-sm text-gray-500">{category.count} products</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default CategoryCards;