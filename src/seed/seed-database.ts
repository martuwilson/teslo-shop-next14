import { initialData } from "./seed";
import prisma from '../lib/prisma';




async function main(){

    //borrar data vieja
    await Promise.all([
        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany()
    ])

    console.log(initialData)



    console.log('Seed ejetucado correctamente')
}







(()=>{

    if(process.env.NODE_ENV === 'production') return;

    main();
})();