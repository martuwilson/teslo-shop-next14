import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { getPaginatedProductsWithImages } from '../../actions/products/product-pagination';
 

export default async function Home() {

  const products = await getPaginatedProductsWithImages();


  return (
    <>
      <Title
        title="Tienda Teslo"
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid products={products.products} />
    </>
  );
}
