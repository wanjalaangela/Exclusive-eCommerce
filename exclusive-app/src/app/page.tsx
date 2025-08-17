import TopBar from "@/SharedComponents/TopBar";
import Header from "@/SharedComponents/Header";
import CategoriesSidebar from "@/components/CategoriesSidebar";
import HeroBanner from "@/components/HeroBanner";
import {FlashSales} from "@/components/FlashSales";
import { Footer } from "@/SharedComponents/Footer";
import Categories from "@/components/Categories";
import { BestSelling } from "@/components/Selling";
import { ExploreProducts } from "@/components/ExploreProducts";
import NewArrivalSection from "@/components/NewArrivalSection";
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
