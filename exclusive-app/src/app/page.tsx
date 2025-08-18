import TopBar from "@/SharedComponents/TopBar";
import Header from "@/SharedComponents/Header";
import CategoriesSidebar from "@/components/CategoriesSidebar/page";
import HeroBanner from "@/components/HeroBanner/page";
import {FlashSales} from "@/components/Flashsales/page";
import { Footer } from "@/SharedComponents/Footer";
import Categories from "@/components/Categories/page";
import { BestSelling } from "@/components/Selling/page";
import { ExploreProducts } from "@/components/ExploreProducts/page";
import NewArrivalSection from "@/components/NewArrival/page";
export default function Home() {
  return (
    <main className="min-h-screen">

      <TopBar />

      <Header />
    
      <section className="flex max-w-7xl mx-auto mt-6 px-4">
      
        <div className="w-1/4 pr-4">
          <CategoriesSidebar />
        </div>
       
        <div className="w-3/4">
          <HeroBanner />
        </div>
      </section>
     <FlashSales/>
     <Categories/>
     <BestSelling/>
<ExploreProducts/>
<NewArrivalSection/>
      <Footer />

    </main>
  );
}
