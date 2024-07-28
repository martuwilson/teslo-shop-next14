import { ProductGrid, TitleComponent } from "@/components";
import { Categories } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
    params: {
        id: Categories;
    }
}

export default function({ params }: Props) {

    const { id } = params;
    const products = seedProducts.filter( p => p.gender === id);

    const labels: Record<Categories, string> = {
        'men': 'Hombres',
        'women': 'Mujeres',
        'kid': 'Niños',
        'unisex': 'todos'
    }

    /* if(id === 'kids') {
        notFound()
    } */

    return (
       <>
        <TitleComponent title={`Artículos para ${labels[id]}`} />

        <ProductGrid products={products} />
       </>
    )
}