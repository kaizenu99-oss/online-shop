import Header from "./components/Header";
import FeaturedBanners from "./components/FeaturedBanners";
import CategoryList from "./components/CategoryList";
import PromoBanners from "./components/PromoBanners";
import PopularProducts from "./components/PopularProducts";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[#fff5f7] dark:bg-[#1a0e13]">
      <Header />
      <FeaturedBanners />
      <CategoryList />
      <PromoBanners />
      <PopularProducts />
      <Features />
      <Footer />
    </div>
  );
}