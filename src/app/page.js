import BannerSection from "@/components/BannerSection/BannerSection";
import CategoriesSection from "@/components/CategorySection/CategoriesSection";
import PopularSection from "@/components/PopularSection/PopularSection";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Menu /> */}
      <main className="flex flex-col gap-20 pb-20">
        {/* Hero Section */}
        <BannerSection />

        {/* Featured Services */}
        <PopularSection />

        {/* Map Section */}
        <ServiceSection />

        {/* Categories Section */}
        <CategoriesSection />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
