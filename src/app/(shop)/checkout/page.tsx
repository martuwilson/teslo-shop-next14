import { QuantitySelector, TitleComponent } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";


const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]

export default function() {
    return (
       <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
        <div className="flex flex-col w-[1000px]">
            <TitleComponent title="Verificar orden" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                
                {/* carrito */}
                <div className="flex flex-col mt-5">
                    <span className="text-xl">
                        Editar items
                    </span>
                    <Link href="/cart" className="underline mb-5">
                    Editar
                    </Link>
                

                {/* items */}
                {
                    productsInCart.map(prod => (
                        <div key={prod.slug} className="flex mb-5">
                            <Image
                                src={`/products/${prod.images[0]}`}
                                width={100}
                                height={100}
                                alt={prod.title}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                }}
                                className="mr-5 rounded"
                            />

                            <div>
                                <p>{prod.title}</p>
                                <p>{prod.price} x 3</p>
                                <p className="font-bold">
                                    Subtotal: {prod.price * 3}
                                </p>

                                <button className="underline mt-3">
                                    Remover
                                </button>
                            </div>

                        </div>
                    ))
                }
                </div>
                {/* resumen de orden */}
                <div className="bg-white rounded-xl shadow-xl p-7">

                    {/* address */}
                    <h2 className="text-2xl mb-2 font-bold">Dirección de entrega</h2>
                    <div className="mb-10">
                        <p className="text-xl">
                            Martin W
                        </p>
                        <p>
                            Av.falsa 1234
                        </p>
                        <p>
                            San Isidro
                        </p>
                        <p>
                            Buenos Aires
                        </p>
                        <p>Argentina</p>
                        <p>
                            CP 1345
                        </p>
                        <p>
                            154578522
                        </p>
                    </div>

                    {/* linea */}
                    <div className="w-full h-0.5 rounded bg-gray-200 mb-10"/>

                    <h2 className="text-2xl mb-2">
                        Resumen de orden
                    </h2>
                    <div className="grid grid-cols-2">
                        <span>
                            No. Productos
                        </span>
                        <span className="text-right">
                            3 artículos
                        </span>

                        <span>
                            Subtotal
                        </span>
                        <span className="text-right">
                            $100
                        </span>

                        <span>
                            Impuestos (15%)
                        </span>
                        <span className="text-right">
                            $13
                        </span>

                        <span className="mt-5 text-2xl">
                            Total:
                        </span>
                        <span className="mt-5 text-2xl text-right">
                            $113
                        </span>
                    </div>

                    <div className="mt-5 mb-2 w-full">

                        
                        <Link href="/orders/123" className="flex btn-primary justify-center">
                        Comprar
                        </Link>

                        <p className="mt-5">
                            {/* disclaimer */}
                            <span>
                                Al hacer clic en comprar, aceptas nuestros <a href="#" className="underline cursor-pointer">términos y condiciones</a> y <a className="underline cursor-pointer">políticas de privacidad</a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}