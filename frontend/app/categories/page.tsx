import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoriesBrowser from "../components/CategoriesBrowser";

export default function CategoriesIndexPage() {
  return (
    <>
      <Header />
      <div className="flex flex-1 flex-col bg-background">
        <CategoriesBrowser />
      </div>
      <Footer />
    </>
  );
}
