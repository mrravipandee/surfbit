import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">TechShop</h3>
                        <p className="text-gray-400">
                            The best marketplace for digital products. Find web apps, mobile apps, templates and more.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Categories</h4>
                        <ul className="space-y-2">
                            <li><Link href="/categories/web-app" className="text-gray-400 hover:text-white">Web Apps</Link></li>
                            <li><Link href="/categories/mobile-app" className="text-gray-400 hover:text-white">Mobile Apps</Link></li>
                            <li><Link href="/categories/ai-ml" className="text-gray-400 hover:text-white">AI & ML</Link></li>
                            <li><Link href="/categories/templates" className="text-gray-400 hover:text-white">Templates</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Connect With Us</h4>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <Github size={20} />
                            </Link>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-400">Subscribe to our newsletter</p>
                            <div className="flex mt-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none w-full"
                                />
                                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} TechShop. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                            Terms of Service
                        </Link>
                        <Link href="/refund" className="text-gray-400 hover:text-white text-sm">
                            Refund Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;