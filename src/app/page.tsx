import HeroSection from '@/sections/home/HeroSection'
import AboutSection from '@/sections/home/AboutSection'
import ThumbnailSection from '@/sections/home/ThumbnailSection'
import BusinessFaqSection from '@/sections/home/BusinessFaqSection'
import PlanSection from '@/sections/home/PlanSection'
import ProcessSection from '@/sections/home/FlowSection'
import BottomBannerSection from '@/sections/home/BottomBannerSection'
import GeneralFaqSection from '@/sections/home/GeneralFaqSection'
import PartnersMarquee from '@/sections/home/PartnersMarquee'

export default function Page() {
return (
<>
<HeroSection />
<AboutSection />
<ThumbnailSection />
<BusinessFaqSection />
<PlanSection />
<ProcessSection />
<PartnersMarquee />
<BottomBannerSection />
<GeneralFaqSection />
</>
)
}