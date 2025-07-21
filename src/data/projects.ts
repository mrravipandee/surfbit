export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    rating: number;
    image: string;
    description: string;
}

export const products: Product[] = [
    { id: 1, name: "AI Content Generator", category: "AI/ML Projects", price: 1299, rating: 4.8, image: "/products/ai-content.png", description: "Generate SEO-optimized content automatically with our advanced AI" },
    { id: 2, name: "E-commerce Dashboard", category: "Dashboard UI", price: 899, rating: 4.5, image: "/products/ecom-dash.png", description: "Complete admin dashboard for e-commerce businesses" },
    { id: 3, name: "Healthcare Admin Panel", category: "Dashboard UI", price: 1199, rating: 4.6, image: "/products/healthcare-dash.png", description: "Manage hospital records with a sleek UI" },
    { id: 4, name: "Finance Tracker", category: "Web App", price: 999, rating: 4.4, image: "/products/finance-tracker.png", description: "Personal finance management tool for daily expenses" },
    { id: 5, name: "Crypto Dashboard", category: "Dashboard UI", price: 1099, rating: 4.7, image: "/products/crypto-dash.png", description: "Track your crypto assets in real-time" },
    { id: 6, name: "Online Learning LMS", category: "Web App", price: 1499, rating: 4.6, image: "/products/learning-lms.png", description: "Learning management system for online courses" },
    { id: 7, name: "Fitness App UI", category: "Mobile App UI", price: 799, rating: 4.3, image: "/products/fitness-app.png", description: "Fitness tracking mobile app design" },
    { id: 8, name: "SaaS Analytics Dashboard", category: "Dashboard UI", price: 1299, rating: 4.7, image: "/products/saas-analytics.png", description: "Business metrics visualization for SaaS products" },
    { id: 9, name: "Stock Market Tracker", category: "Web App", price: 999, rating: 4.5, image: "/products/stock-tracker.png", description: "Analyze and visualize stock market data easily" },
    { id: 10, name: "Portfolio Website", category: "Web Template", price: 499, rating: 4.4, image: "/products/portfolio-web.png", description: "Personal branding website for developers and designers" },
    { id: 11, name: "Restaurant POS System", category: "Web App", price: 1999, rating: 4.6, image: "/products/restaurant-pos.png", description: "Point of sale system for restaurants and cafes" },
    { id: 12, name: "Hotel Booking Platform", category: "Web App", price: 1499, rating: 4.7, image: "/products/hotel-booking.png", description: "Complete hotel room booking management system" },
    { id: 13, name: "Event Management Dashboard", category: "Dashboard UI", price: 999, rating: 4.3, image: "/products/event-dash.png", description: "Manage and track events with an intuitive UI" },
    { id: 14, name: "IoT Device Dashboard", category: "Dashboard UI", price: 1599, rating: 4.6, image: "/products/iot-dash.png", description: "Monitor your IoT devices in real-time" },
    { id: 15, name: "Real Estate CRM", category: "Web App", price: 1799, rating: 4.4, image: "/products/real-estate-crm.png", description: "Customer management for real estate agencies" },
    { id: 16, name: "Blog CMS", category: "Web App", price: 899, rating: 4.3, image: "/products/blog-cms.png", description: "Manage blog posts with an easy-to-use CMS" },
    { id: 17, name: "HR Management Tool", category: "Web App", price: 1399, rating: 4.5, image: "/products/hr-management.png", description: "Employee management and attendance tracking tool" },
    { id: 18, name: "Logistics Dashboard", category: "Dashboard UI", price: 1399, rating: 4.6, image: "/products/logistics-dash.png", description: "Track shipments and logistics in real-time" },
    { id: 19, name: "Travel Planning App", category: "Mobile App UI", price: 799, rating: 4.2, image: "/products/travel-app.png", description: "Plan your trips with ease and explore destinations" },
    { id: 20, name: "AI-Powered Image Editor", category: "AI/ML Projects", price: 1499, rating: 4.8, image: "/products/ai-image.png", description: "Edit images using advanced AI capabilities" },
    { id: 21, name: "Voice Assistant App", category: "AI/ML Projects", price: 1699, rating: 4.7, image: "/products/voice-assistant.png", description: "Smart voice assistant with NLP features" },
    { id: 22, name: "Weather Forecast App", category: "Web App", price: 499, rating: 4.3, image: "/products/weather-app.png", description: "Accurate weather forecast and climate data" },
    { id: 23, name: "Inventory Management", category: "Web App", price: 1099, rating: 4.4, image: "/products/inventory.png", description: "Manage stocks and products efficiently" },
    { id: 24, name: "Online Course Platform", category: "Web App", price: 1499, rating: 4.5, image: "/products/course-platform.png", description: "Launch and sell online courses easily" },
    { id: 25, name: "Job Portal Website", category: "Web App", price: 1499, rating: 4.4, image: "/products/job-portal.png", description: "Connect job seekers with employers seamlessly" },
    { id: 26, name: "Photography Portfolio", category: "Web Template", price: 599, rating: 4.2, image: "/products/photography.png", description: "Elegant template for photographers" },
    { id: 27, name: "AR Product Viewer", category: "AI/ML Projects", price: 1799, rating: 4.7, image: "/products/ar-product.png", description: "Visualize products in AR environment" },
    { id: 28, name: "E-learning Dashboard", category: "Dashboard UI", price: 999, rating: 4.5, image: "/products/e-learning-dash.png", description: "Dashboard for online learning platforms" },
    { id: 29, name: "Travel Booking UI", category: "Mobile App UI", price: 899, rating: 4.3, image: "/products/travel-booking.png", description: "Mobile UI for booking flights and hotels" },
    { id: 30, name: "AI-powered Resume Builder", category: "AI/ML Projects", price: 1399, rating: 4.7, image: "/products/ai-resume.png", description: "Generate professional resumes with AI" },
    { id: 31, name: "Music Streaming App UI", category: "Mobile App UI", price: 999, rating: 4.2, image: "/products/music-app.png", description: "Sleek UI for music streaming applications" },
    { id: 32, name: "Marketplace Platform", category: "Web App", price: 1599, rating: 4.4, image: "/products/marketplace.png", description: "Buy and sell products on your platform" },
    { id: 33, name: "Data Analytics Dashboard", category: "Dashboard UI", price: 1299, rating: 4.5, image: "/products/data-analytics.png", description: "Visualize complex data with clarity" },
    { id: 34, name: "Hospital Management System", category: "Web App", price: 1999, rating: 4.7, image: "/products/hospital-system.png", description: "Manage hospital activities effectively" },
    { id: 35, name: "NFT Marketplace UI", category: "Dashboard UI", price: 1499, rating: 4.4, image: "/products/nft-market.png", description: "Buy, sell and trade NFTs with ease" },
    { id: 36, name: "AI-powered Code Assistant", category: "AI/ML Projects", price: 1899, rating: 4.8, image: "/products/code-ai.png", description: "Generate and assist with code snippets using AI" },
    { id: 37, name: "Digital Wallet App", category: "Mobile App UI", price: 799, rating: 4.3, image: "/products/wallet-app.png", description: "Manage your digital payments securely" },
    { id: 38, name: "Ecommerce Mobile UI", category: "Mobile App UI", price: 899, rating: 4.2, image: "/products/ecommerce-mobile.png", description: "Clean mobile UI for shopping apps" },
    { id: 39, name: "Freelance Platform", category: "Web App", price: 1799, rating: 4.6, image: "/products/freelance.png", description: "Connect freelancers and clients easily" },
    { id: 40, name: "Chatbot Builder", category: "AI/ML Projects", price: 1799, rating: 4.9, image: "/products/chatbot.png", description: "No-code chatbot builder with NLP capabilities" }
];

export const trendingProducts: Product[] = [
    products[0],  // AI Content Generator
    products[4],  // Crypto Dashboard
    products[5],  // Online Learning LMS
    products[7],  // SaaS Analytics Dashboard
    products[20], // AI-Powered Image Editor
    products[21], // Voice Assistant App
    products[27], // AR Product Viewer
    products[39], // Freelance Platform
];
