import React from 'react';
import { Code, Paintbrush, Smartphone, Globe, Server, Gamepad2, Database, Lock, Mail, Twitter, Facebook, Instagram, Linkedin, Github, Heart } from 'lucide-react';

const CATEGORIES = [
    {
        name: "Development Tools",
        icon: <Code size={18} />,
        subcategories: [
            { name: "Code Editors", slug: "code-editors" },
            { name: "IDEs", slug: "ides" },
            { name: "Version Control", slug: "version-control" },
            { name: "Debugging Tools", slug: "debugging-tools" },
            { name: "APIs & SDKs", slug: "apis-sdks" }
        ]
    },
    {
        name: "Design Software",
        icon: <Paintbrush size={18} />,
        subcategories: [
            { name: "UI/UX Tools", slug: "ui-ux-tools" },
            { name: "Photo Editing", slug: "photo-editing" },
            { name: "Vector Graphics", slug: "vector-graphics" },
            { name: "3D Modeling", slug: "3d-modeling" }
        ]
    },
    {
        name: "Mobile Apps",
        icon: <Smartphone size={18} />,
        subcategories: [
            { name: "iOS Apps", slug: "ios-apps" },
            { name: "Android Apps", slug: "android-apps" },
            { name: "Cross-Platform", slug: "cross-platform" },
            { name: "Mobile Games", slug: "mobile-games" }
        ]
    },
    {
        name: "Web Applications",
        icon: <Globe size={18} />,
        subcategories: [
            { name: "CMS", slug: "cms" },
            { name: "E-commerce", slug: "ecommerce" },
            { name: "SaaS Products", slug: "saas" },
            { name: "Web Frameworks", slug: "web-frameworks" }
        ]
    },
    {
        name: "System Software",
        icon: <Server size={18} />,
        subcategories: [
            { name: "Operating Systems", slug: "os" },
            { name: "Drivers", slug: "drivers" },
            { name: "Utilities", slug: "utilities" },
            { name: "Security", slug: "security" }
        ]
    },
    {
        name: "Games",
        icon: <Gamepad2 size={18} />,
        subcategories: [
            { name: "PC Games", slug: "pc-games" },
            { name: "Console Games", slug: "console-games" },
            { name: "Game Engines", slug: "game-engines" },
            { name: "Assets & Mods", slug: "assets-mods" }
        ]
    },
    {
        name: "Database Tools",
        icon: <Database size={18} />,
        subcategories: [
            { name: "Database Managers", slug: "db-managers" },
            { name: "ORMs", slug: "orms" },
            { name: "Migration Tools", slug: "migration-tools" },
            { name: "Visualization", slug: "visualization" }
        ]
    },
    {
        name: "Security Software",
        icon: <Lock size={18} />,
        subcategories: [
            { name: "Antivirus", slug: "antivirus" },
            { name: "VPN", slug: "vpn" },
            { name: "Encryption", slug: "encryption" },
            { name: "Pen Testing", slug: "pen-testing" }
        ]
    }
];

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 border-t border-gray-200 pt-12 pb-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900">SurfBit</h3>
                        <p className="text-sm text-gray-600">
                            Empowering beginners and startups with ready-to-use code packages and software solutions.
                            Students can showcase projects and monetize their skills.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-pink-600 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-blue-800 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm hover:text-blue-600 transition-colors">Home</a></li>
                            <li><a href="#" className="text-sm hover:text-blue-600 transition-colors">Explore Projects</a></li>
                            <li><a href="#" className="text-sm hover:text-blue-600 transition-colors">Submit Your Project</a></li>
                            <li><a href="#" className="text-sm hover:text-blue-600 transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-sm hover:text-blue-600 transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {CATEGORIES.slice(0, 4).map((category) => (
                                <div key={category.name} className="flex items-center space-x-2">
                                    <span className="text-blue-600">{category.icon}</span>
                                    <a href="#" className="text-sm hover:text-blue-600 transition-colors">
                                        {category.name}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
                        <div className="flex items-start space-x-2">
                            <Mail size={18} className="mt-1 text-blue-600" />
                            <div>
                                <p className="text-sm">support@surfbit.com</p>
                                <p className="text-xs text-gray-500">Typically replies within 24 hours</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-900">Newsletter</h4>
                            <p className="text-xs text-gray-500 mb-2">Stay updated with our latest offers</p>
                            <div className="mt-2 flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="px-3 py-2 bg-gray-50 border border-gray-300 text-sm rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-full"
                                />
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r text-sm font-medium transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-xs text-gray-500 mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} SurfBit. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Terms of Service</a>
                        <a href="#" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Cookie Policy</a>
                    </div>
                </div>

                {/* Made with love */}
                <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500 flex items-center justify-center">
                        Made with <Heart size={12} className="mx-1 text-red-500 fill-red-500" /> by the SurfBit team
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;