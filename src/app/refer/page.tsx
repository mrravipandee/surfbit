import { Gift, Share2, UserPlus, DollarSign, Users, Award, Check } from 'lucide-react'
import Link from 'next/link'

export default function ReferPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Gift className="mr-2" size={18} />
                        Earn Together
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        SurfBit Referral Program
                    </h1>
                    <p className="mt-6 text-xl max-w-3xl mx-auto">
                        Share SurfBit with your network and earn rewards for every successful referral
                    </p>
                </div>
            </div>

            {/* How It Works */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Simple steps to start earning with our referral program
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                            <UserPlus size={24} />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">1. Get Your Referral Link</h3>
                        <p className="text-gray-600">
                            Sign in to your account and copy your unique referral link from the dashboard
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                            <Share2 size={24} />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">2. Share With Friends</h3>
                        <p className="text-gray-600">
                            Share your link via WhatsApp, email, social media, or any other platform
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                            <DollarSign size={24} />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">3. Earn Rewards</h3>
                        <p className="text-gray-600">
                            Get paid when your friends make their first purchase or sell their first project
                        </p>
                    </div>
                </div>
            </div>

            {/* Rewards Section */}
            <div className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900">Your Rewards</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                            Generous commissions for both buyers and sellers
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* For Buyers */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                            <div className="flex items-center mb-6">
                                <div className="p-3 rounded-lg bg-green-100 text-green-600 mr-4">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Referring Buyers</h3>
                            </div>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <Check className="text-green-500 mr-3" size={18} />
                                    </div>
                                    <span>Earn <strong>10% commission</strong> on their first purchase</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <Check className="text-green-500 mr-3" size={18} />
                                    </div>
                                    <span>Your friend gets <strong>15% discount</strong> on first order</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <Check className="text-green-500 mr-3" size={18} />
                                    </div>
                                    <span>No limit on number of referrals</span>
                                </li>
                            </ul>
                        </div>

                        {/* For Sellers */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                            <div className="flex items-center mb-6">
                                <div className="p-3 rounded-lg bg-purple-100 text-purple-600 mr-4">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Referring Sellers</h3>
                            </div>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <Check className="text-purple-500 mr-3" size={18} />
                                    </div>
                                    <span>Earn <strong>5% commission</strong> on their first sale</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <Check className="text-purple-500 mr-3" size={18} />
                                    </div>
                                    <span>Bonus <strong>₹500</strong> when they sell 5+ projects</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <Check className="text-purple-500 mr-3" size={18} />
                                    </div>
                                    <span>Exclusive badges for top referrers</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-blue-600 rounded-xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-extrabold mb-4">Ready to Start Earning?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join our referral program today and start earning with every successful referral
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/dashboard/referrals"
                            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center"
                        >
                            <Share2 className="mr-2" />
                            Get Referral Link
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-lg font-bold text-lg border border-white flex items-center justify-center"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">FAQ</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Column 1 */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">How do I track my referrals?</h3>
                            <p className="text-gray-600">
                                You can monitor all your referrals in real-time from your account dashboard, including pending and completed referrals.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">When do I get paid?</h3>
                            <p className="text-gray-600">
                                Commissions are paid out monthly, 15 days after the end of each month via bank transfer or UPI.
                            </p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Is there a referral limit?</h3>
                            <p className="text-gray-600">
                                No! You can refer as many friends as you want. There's no upper limit to how much you can earn.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">What if my friend uses someone else's link?</h3>
                            <p className="text-gray-600">
                                The first referral link clicked will be credited. Make sure your friends use your link for you to get credit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}