/* eslint-disable react/display-name */

import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

/* eslint-disable import/no-anonymous-default-export */
export default function(){
    return (
        <div className="flex justify-center items-center h-[800px]">
          <IoCartOutline size={80} className="mx-5"/>

          <div
            className="flex flex-col items-center"
          >
            <h1 className="text-xl font-semibold">
            Tu carrito esta vacio
            </h1>

            <Link href="/" className="text-blue-500 mt-2 text-4xl">
              Regresar
            </Link>
          </div>
        </div>
      );
}