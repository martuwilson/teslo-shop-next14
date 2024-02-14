'use server'

import prisma from "@/lib/prisma"

export const getStockBySlug = async(slug: string): Promise<number> => {

    try {

        const stock = await prisma.product.findFirst({
            where: {
                slug
            },
            select: {
                inStock: true
            }
        })

        if(!stock){
            throw new Error('Stock not found')
        }

        return stock?.inStock ?? 0;

    } catch (error) {
        throw new Error('Error getting stock by slug')
    }

}