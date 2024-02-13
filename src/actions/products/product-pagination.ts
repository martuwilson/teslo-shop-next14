"use server";

import prisma from '@/lib/prisma';


export const getPaginatedProductsWithImages = async() => {
    try {
        
        const products = await prisma.product.findMany({
            take: 3,
            include: {
                ProductImage: {
                    take: 2,
                    select: {
                        url: true
                    }
                }
            }
        })

        console.log(products);

        return {
            products: products.map(prod => ({
                currentPage: 1, 
                totalPages: 10,
                ...prod,
                images: prod.ProductImage.map(img => img.url)
            }))
        }
    } catch (error) {
        throw new Error("No se pudo cargar los productos")
    }
};