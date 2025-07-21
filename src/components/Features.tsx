import { Shield, Headphones, Settings } from 'lucide-react'

const features = [
    {
        icon: <Shield size={32} className="text-blue-600" />,
        title: "No Refund Policy",
        description: "All sales are final due to the digital nature of our products."
    },
    {
        icon: <Headphones size={32} className="text-blue-600" />,
        title: "24/7 Support",
        description: "Our support team is available round the clock to assist you."
    },
    {
        icon: <Settings size={32} className="text-blue-600" />,
        title: "Setup & Support",
        description: "Get help with installation and configuration of your purchase."
    }
]

const Features = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features;