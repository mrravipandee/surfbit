import { ArrowRight, Zap, MessageSquare, CheckCircle } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap size={16} className="mr-2" />
              Minimal Charges, Maximum Value
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Boost Your Journey with <span className="text-blue-600">SurfBit</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Affordable software solutions that scale with your business. Pay less, achieve more with our expertly crafted digital products.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle size={18} className="text-[#ea7173] mr-2 flex-shrink-0" />
                <span className="text-gray-700">Premium products at minimal charges</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={18} className="text-[#ea7173] mr-2 flex-shrink-0" />
                <span className="text-gray-700">Free consultation with our experts</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={18} className="text-[#ea7173] mr-2 flex-shrink-0" />
                <span className="text-gray-700">Tailored solutions for your specific needs</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all hover:shadow-lg"
              >
                Explore Solutions <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                href="/consultation" 
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all"
              >
                <MessageSquare size={18} className="mr-2" />
                Free Consultation
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="hidden md:block relative  overflow-hidden">  
              <Image
                width={600}
                height={400}
                src="/hero_surfbit.svg"
                alt="SurfBit Digital Solutions"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0"></div>
            </div>
            
            {/* Floating price tag */}
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-md border border-gray-100">
              <div className="text-xs text-gray-500">Starting at just</div>
              <div className="text-2xl font-bold text-blue-600">₹ 99</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;