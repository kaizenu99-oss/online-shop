import Header from "./components/Header";
import FeaturedBanners from "./components/FeaturedBanners";
import CategoryList from "./components/CategoryList";
import PromoBanners from "./components/PromoBanners";
import DealsGrid from "./components/DealsGrid";
import PopularProducts from "./components/PopularProducts";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <Header />
      <FeaturedBanners />
      <CategoryList />
      <PromoBanners />
      <DealsGrid />
      <PopularProducts />
      <Features />
      <Footer />
    </div>
  );
}