import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
// import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { Gender } from "@prisma/client";
import { notFound, redirect } from "next/navigation";

// const seedProducts = initialData.products; ahora consume desde la db
interface Props {
  params:{
    gender: string; // antes era Category porque venia del ts directamente. Ahora consume de la db
  },
  searchParams: {
    page?: string;
  }
}


export default async function( {params, searchParams}: Props ){

  const {gender} = params

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const {products, currentPage, totalPages} = await getPaginatedProductsWithImages({page, gender: gender as Gender});

  if (!products.length) {
    redirect(`/gender/${gender}`); 
  }

  // const products = seedProducts.filter( product => product.gender === id)

  const labelsGender: Record<string, string> = {
    'men': 'para Hombres',
    'women': 'para Mujeres',
    'kid': 'para Niños',
    'unisex': 'para todos'
  }
/* 
  if(id !== products){
    
    notFound()
  } */

    return (
      <>
      <Title
        title={`Articulos ${labelsGender[gender]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid products={products} />

      <Pagination
        totalPages={totalPages}
      />
    </>
      );
}