import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CategoryDetail from "../../components/CategoryDetail";
import CategoryNotFound from "../../components/CategoryNotFound";
import { categories } from "../../data/categories";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const category = categories.find((item) => item.id === id);

  return (
    <>
      <Header />
      {category ? <CategoryDetail category={category} /> : <CategoryNotFound />}
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({ id: category.id }));
}
