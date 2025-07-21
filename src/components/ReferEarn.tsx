import { Gift, Share2 } from 'lucide-react'

const ReferEarn = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="flex items-center mb-4">
                            <Gift size={24} className="mr-2" />
                            <h2 className="text-2xl font-bold">Refer & Earn</h2>
                        </div>
                        <p className="mb-6">
                            Invite your friends to join TechShop and earn 10% commission on their first purchase.
                            Plus, they get 15% off their first order!
                        </p>
                        <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium flex items-center">
                            <Share2 size={18} className="mr-2" />
                            Share Your Link
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                            <h3 className="font-bold text-lg mb-2">How it works</h3>
                            <ul className="space-y-2">
                                <li>1. Share your referral link with friends</li>
                                <li>2. They sign up and make their first purchase</li>
                                <li>3. You earn 10% of their purchase amount</li>
                                <li>4. They get 15% off their first order</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReferEarn;