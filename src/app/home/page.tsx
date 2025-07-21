import HeroSection from '@/components/HeroSection'
import TrendingProducts from '@/components/TrendingProducts'
import CategoryCards from '@/components/CategoryCards'
import BestSelling from '@/components/BestSelling'
import ReferEarn from '@/components/ReferEarn'
import ProductSection from '@/components/ProductSection'
import Features from '@/components/Features'

export default function Home() {
    return (
        <div className="space-y-16 pb-16">
            <HeroSection />
            <TrendingProducts />
            <CategoryCards />
            <BestSelling />
            <ReferEarn />
            <ProductSection />
            <Features />
        </div>
    )
}