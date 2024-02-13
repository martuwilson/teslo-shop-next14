import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { getPaginatedProductsWithImages } from '../../actions/products/product-pagination';


const products = initialData.products;  

export default async function Home() {

  const productsTemp = await getPaginatedProductsWithImages();


  return (
    <>
      <Title
        title="Tienda Teslo"
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid products={products} />
    </>
  );
}
