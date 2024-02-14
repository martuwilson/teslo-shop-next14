'use server'

import prisma from "@/lib/prisma"

export const getProductSlug = async(slug: string) => {
  
    try{
        const product = await prisma.product.findFirst({
            include: {
                ProductImage:{
                    select:{
                        url: true
                    }
                }
            },
            where:{
                slug
            }
        })


        if(!product){
            return null;
        }

        return {
           ...product,
           images: product.ProductImage.map((image) => image.url) 
        }

    }catch(err){
        throw new Error('No se pudo cargar el producto por slug')
    }
}