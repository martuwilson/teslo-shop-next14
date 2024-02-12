import { initialData } from "./seed";




async function main(){

    console.log(initialData)



    console.log('Seed ejetucado correctamente')
}







(()=>{

    if(process.env.NODE_ENV === 'production') return;

    main();
})();