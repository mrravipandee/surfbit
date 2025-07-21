import { DollarSign, Upload, Code, Youtube, Github, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function EarnAndSellPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Earn & Sell With SurfBit
                    </h1>
                    <p className="mt-3 text-xl text-gray-500">
                        Monetize your projects or find premium digital solutions
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Sell Your Project Section */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                        <div className="flex items-center mb-6">
                            <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
                                <Upload size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Sell Your Project</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <DollarSign size={18} className="text-gray-500" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900">Pricing Structure</h3>
                                    <p className="mt-1 text-gray-600">
                                        We determine price based on project complexity, features, and market demand.
                                        <br />
                                        <span className="font-medium">One-time payment</span> model with 70-30 revenue split (you get 70%).
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <Code size={18} className="text-gray-500" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900">Submission Requirements</h3>
                                    <ul className="mt-1 text-gray-600 space-y-2">
                                        <li>• Project title and detailed description</li>
                                        <li>• Complete source code (GitHub repository link)</li>
                                        <li>• YouTube video demonstrating setup and features</li>
                                        <li>• Technical documentation</li>
                                        <li>• Your contact information</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <h4 className="font-medium text-blue-800 mb-2">Important Notes:</h4>
                                <ul className="text-blue-700 space-y-1 text-sm">
                                    <li>• Projects must be 100% original work</li>
                                    <li>• Include all dependencies and installation instructions</li>
                                    <li>• Provide support contact for buyer questions</li>
                                    <li>• Payment processed after successful vetting</li>
                                </ul>
                            </div>

                            <Link
                                href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 w-full mt-6"
                            >
                                Submit Your Project
                            </Link>
                        </div>
                    </div>

                    {/* Earn as Developer Section */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                        <div className="flex items-center mb-6">
                            <div className="p-3 rounded-lg bg-green-100 text-green-600 mr-4">
                                <DollarSign size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Earn as Developer</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <Code size={18} className="text-gray-500" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900">Opportunities</h3>
                                    <p className="mt-1 text-gray-600">
                                        Join our network of 100+ developers working on:
                                    </p>
                                    <ul className="mt-2 text-gray-600 space-y-1">
                                        <li>• Custom project development</li>
                                        <li>• Client project implementation</li>
                                        <li>• Code reviews and optimization</li>
                                        <li>• Technical documentation</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <DollarSign size={18} className="text-gray-500" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900">Compensation</h3>
                                    <p className="mt-1 text-gray-600">
                                        Earn competitive rates based on your skills:
                                    </p>
                                    <div className="mt-2 grid grid-cols-2 gap-2">
                                        <div className="bg-gray-50 p-3 rounded">
                                            <p className="font-medium">Junior Devs</p>
                                            <p className="text-sm">₹500-₹1000/hr</p>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded">
                                            <p className="font-medium">Mid-Level</p>
                                            <p className="text-sm">₹1000-₹2000/hr</p>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded">
                                            <p className="font-medium">Senior Devs</p>
                                            <p className="text-sm">₹2000-₹4000/hr</p>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded">
                                            <p className="font-medium">AI/ML Experts</p>
                                            <p className="text-sm">₹2500-₹5000/hr</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                <h4 className="font-medium text-green-800 mb-2">How to Apply:</h4>
                                <ol className="text-green-700 space-y-1 text-sm list-decimal list-inside">
                                    <li>Submit your portfolio and GitHub profile</li>
                                    <li>Complete our technical assessment</li>
                                    <li>Sign our developer agreement</li>
                                    <li>Start receiving project opportunities</li>
                                </ol>
                            </div>

                            <Link
                                href="https://docs.google.com/forms/d/e/YOUR_DEVELOPER_FORM_ID/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 w-full mt-6"
                            >
                                Join Developer Network
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Submission Guidelines</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                                <Youtube className="text-red-500 mr-2" />
                                Video Requirements
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• 5-10 minute demonstration of your project</li>
                                <li>• Clear audio and HD video quality</li>
                                <li>• Show complete setup process</li>
                                <li>• Highlight key features and functionality</li>
                                <li>• Upload to YouTube as unlisted or public</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                                <Github className="text-gray-800 mr-2" />
                                Code Requirements
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Well-organized repository structure</li>
                                <li>• Comprehensive README.md file</li>
                                <li>• Clear installation instructions</li>
                                <li>• Properly documented code</li>
                                <li>• Include license information</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                            <Mail className="text-blue-500 mr-2" />
                            Contact Information
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-center">
                                <Mail className="text-gray-500 mr-2" size={18} />
                                <span className="text-gray-600">forangeinc@gmail.com</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="text-gray-500 mr-2" size={18} />
                                <span className="text-gray-600">WhatsApp available upon submission</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}