import { Mail, MessageSquare, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Get in Touch
                    </h1>
                    <p className="mt-3 text-xl text-gray-500">
                        We&apos;d love to hear from you
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Email */}
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                            <Mail className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">Email Us</h3>
                        <p className="mt-2 text-base text-gray-500">
                            For business inquiries and support
                        </p>
                        <div className="mt-4">
                            <Link
                                href="mailto:forangeinc@gmail.com"
                                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                            >
                                forangeinc@gmail.com
                            </Link>
                        </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                            <MessageSquare className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">WhatsApp</h3>
                        <p className="mt-2 text-base text-gray-500">
                            For quick queries and chat support
                        </p>
                        <div className="mt-4">
                            <Link
                                href="https://wa.me/918779969488"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
                            >
                                Chat with us
                            </Link>
                        </div>
                    </div>

                    {/* Instagram */}
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-pink-100 text-pink-600">
                            <Instagram className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">Instagram</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Follow us for updates and showcases
                        </p>
                        <div className="mt-4">
                            <Link
                                href="https://instagram.com/surfbit.platform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-600 hover:text-pink-800 font-medium inline-flex items-center"
                            >
                                @surfbit.platform
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Prefer to message directly?</h2>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        Feel free to reach out through any of these channels. We typically respond within 24 hours.
                    </p>
                </div>
            </div>
        </div>
    )
}