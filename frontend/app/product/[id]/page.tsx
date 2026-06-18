import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductDetail from "../../components/ProductDetail";
import ProductNotFound from "../../components/ProductNotFound";
import { findProductById } from "../../lib/allProducts";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = findProductById(id);

  return (
    <>
      <Header />
      {product ? <ProductDetail product={product} /> : <ProductNotFound />}
      <Footer />
    </>
  );
}
