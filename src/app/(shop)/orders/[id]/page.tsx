/* eslint-disable react/no-unescaped-entities */
import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";


const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

interface OrderProps {
  params: {
    id: string;
  }
}


export default function({params}: OrderProps){

    const {id} = params;
    //check user todo


    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
          <div className="flex flex-col w-[1000px]">
            <Title title={`Orden #${id}`} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {/* Carrito */}
              
              <div className="flex flex-col mt-5">
                <div
                  className={
                    clsx(
                      "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                      {
                        'bg-red-500': true,
                        'bg-green-500': false
                      }

                    )
                  }>
                    <IoCardOutline size={30}/>
                    {/* <span className="mx-2">Pendiente de pago</span> */}
                    <span className="mx-2">Orden pagada</span>
                </div>
              

              {/* items de carrito */}

              {
                productsInCart.map(product => (
                  <div
                    key={product.slug}
                    className="flex mb-5"
                  >
                    <Image
                      src={`/products/${product.images[0]}`}
                      alt={product.title}
                      width={100}
                      height={100}
                      style={{
                        width: '100px',
                        height: '100px'
                      }}
                      className="mr-5 rounded"
                    />

                    <div>
                      <p>
                        {product.title}
                      </p>
                      <p>
                        ${product.price} x 3
                      </p>
                      <p className="font-bold">Subtotal: ${product.price * 3}</p>
                    </div>
                  </div>
                ))
              }
              </div>



              {/* checkout */}

              <div className="bg-white rounded-xl shadow-xl p-7">

                <h2 className="text-2xl mb-2">Dirección de Entrega</h2>
                <div className="mb-10">
                  <p className="text-xl">Wilson wilson</p>
                  <p>Av falsa 123</p>
                  <p>Buenos Aires</p>
                  <p>Argentina</p>
                  <p>C.P 1234</p>
                  <p>12.123.123</p>
                </div>
                <div className="w-full h-0.5 rounded bg-gray-200 mb-10">
                  
                </div>
                <h2 className="text-2xl mb-2">
                  Resumen de compra
                </h2>
                <div className="grid grid-cols-2">
                  <span>No. Productos</span>
                  <span className="text-right">3 artículos</span>

                  <span>Subtotal</span>
                  <span className="text-right">$100</span>

                  <span>Impuestos (15%)</span>
                  <span className="text-right">$15</span>

                  <span className="text-2xl mt-5">Total</span>
                  <span className="text-right text-2xl mt-5">$115</span>
                </div>

                <div className="mt-5 mb-2 w-full">
                <div className="flex flex-col mt-5">
                <div
                  className={
                    clsx(
                      "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                      {
                        'bg-red-500': true,
                        'bg-green-500': false
                      }

                    )
                  }>
                    <IoCardOutline size={30}/>
                    {/* <span className="mx-2">Pendiente de pago</span> */}
                    <span className="mx-2">Orden pagada</span>
                </div>
              
              </div>
                                    
                </div>
              </div>

            </div>
          </div>
        </div>
      );
}