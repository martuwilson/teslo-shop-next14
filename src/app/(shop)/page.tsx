import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { getPaginatedProductsWithImages } from '../../actions/products/product-pagination';
import { redirect } from "next/navigation";
 

interface Props {
  searchParams: {
    page?: string
  }
}


export default async function Home({searchParams}: Props) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const {products} = await getPaginatedProductsWithImages({page});

  if (!products.length) {
    redirect("/"); // si no hay mas productos redirigir a la pagina principal
  }

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
