import { ProductGrid, TitleComponent } from "@/components";
import { initialData } from "@/seed/seed";


const products = initialData.products;

export default function Home() {
  return (
    <>
      <TitleComponent title="Tienda" subtitle="Todos los productos" className="mb-2"/>

      <ProductGrid
        products={products}
      />
    </>
  );
}
