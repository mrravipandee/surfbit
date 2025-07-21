import { Calendar, Clock, Code, Cpu, Database, Layout, Smartphone, Terminal, Zap, Check } from 'lucide-react'
import Link from 'next/link'

export default function ConsultationPage() {
  const expertiseAreas = [
    {
      icon: <Code className="w-6 h-6 text-blue-600" />,
      title: "Web Development",
      description: "React, Next.js, Node.js, and modern web architecture"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      title: "Mobile Apps",
      description: "React Native, Flutter, and native iOS/Android development"
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      title: "AI/ML Solutions",
      description: "Machine learning models, NLP, and computer vision"
    },
    {
      icon: <Database className="w-6 h-6 text-blue-600" />,
      title: "Database Design",
      description: "SQL, NoSQL, and optimized data architectures"
    },
    {
      icon: <Layout className="w-6 h-6 text-blue-600" />,
      title: "UI/UX Design",
      description: "User-centered design systems and prototypes"
    },
    {
      icon: <Terminal className="w-6 h-6 text-blue-600" />,
      title: "DevOps",
      description: "CI/CD pipelines, cloud infrastructure, and scaling"
    }
  ]

  const consultationTypes = [
    {
      title: "Quick Call (30 min)",
      price: "₹999",
      features: [
        "Initial project assessment",
        "High-level recommendations",
        "Tech stack suggestions"
      ],
      bestFor: "Getting started"
    },
    {
      title: "Deep Dive (2 hours)",
      price: "₹3,999",
      features: [
        "Detailed technical review",
        "Architecture diagrams",
        "Implementation roadmap",
        "Code samples"
      ],
      bestFor: "Project planning"
    },
    {
      title: "Ongoing Support",
      price: "₹9,999/month",
      features: [
        "Weekly check-ins",
        "Unlimited email support",
        "Code reviews",
        "Priority scheduling"
      ],
      bestFor: "Long-term projects"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="mr-2" size={18} />
            Expert Guidance
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            SurfBit Technical Consultation
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Get personalized advice from our network of 100+ developers to optimize your project
          </p>
        </div>
      </div>

      {/* Expertise Areas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Expertise Areas</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We cover all major technology domains
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {area.icon}
                </div>
                <h3 className="ml-4 text-lg font-medium text-gray-900">{area.title}</h3>
              </div>
              <p className="mt-2 text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Consultation Options */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Consultation Packages</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Flexible options to meet your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultationTypes.map((type, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-sm overflow-hidden ${index === 1 ? "border-2 border-blue-500 transform scale-105" : "border border-gray-200"}`}>
                <div className={`p-6 ${index === 1 ? "bg-blue-50" : ""}`}>
                  <h3 className="text-2xl font-bold text-gray-900 text-center">{type.title}</h3>
                  <div className="mt-4 flex justify-center">
                    <span className="text-3xl font-extrabold text-gray-900">{type.price}</span>
                  </div>
                  <div className="mt-6">
                    <ul className="space-y-3">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Best for: {type.bestFor}
                    </span>
                  </div>
                  <Link
                    href={`/book-consultation?type=${encodeURIComponent(type.title)}`}
                    className={`mt-4 block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white ${index === 1 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-800 hover:bg-gray-900"}`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">How Our Consultation Works</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Simple process to get expert advice
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Calendar className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">1. Book a Slot</h3>
            <p className="mt-2 text-gray-600">Select your preferred time and consultation type</p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">2. Confirm Payment</h3>
            <p className="mt-2 text-gray-600">Secure payment via UPI, cards, or net banking</p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">3. Prepare Questions</h3>
            <p className="mt-2 text-gray-600">Share your project details in advance</p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Terminal className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">4. Get Expert Advice</h3>
            <p className="mt-2 text-gray-600">Video call with detailed follow-up notes</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
            Ready to accelerate your project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our developers have helped 500+ clients build better software
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book-consultation"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg"
            >
              Book Consultation Now
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-lg font-bold text-lg border border-white"
            >
              Ask Questions First
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}