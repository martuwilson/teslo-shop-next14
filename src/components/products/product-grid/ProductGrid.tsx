import { Product } from "@/interfaces"

interface Props {
    products: Product[]
}

export const ProductGrid = ({products}: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
        {products.map((product) => (
            <div key={product.slug} className="border border-gray-200 rounded-lg overflow-hidden">
            <img src={product.images[0]} alt={product.title} className="w-full h-64 object-cover object-center" />
            <div className="p-4">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="text-lg font-semibold mt-2">${product.price}</p>
            </div>
            </div>
        ))}
    </div>
  )
}
