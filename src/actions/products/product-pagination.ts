"use server";

import prisma from '@/lib/prisma';


interface PaginationOptions {
    page?: number;
    take?: number;
}

export const getPaginatedProductsWithImages = async({page = 1, take = 12}: PaginationOptions) => {

    if(isNaN(Number(page))) page = 1;
    if( page < 1) page = 1;

    if(isNaN(Number(take))) take = 12;
    if( take < 1) take = 12;

    try {
        
        const products = await prisma.product.findMany({
            take: take,
            skip: ( page - 1) * take,
            include: {
                ProductImage: {
                    take: 2,
                    select: {
                        url: true
                    }
                }
            }
        })

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