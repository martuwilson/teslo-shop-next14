# Descripción

## Correr en dev

1. Clonar el repositorio
2. Crear una copia del archivo ```.env.template``` y renombrarlo a ```.env``` ademas de cambiar las variables de entorno.
3. Instalar las dependencias ```npm install```.
4. Levantar la base de datos ```docker compose up -d```.
5. Correr las migraciones de Prisma ```npx prisma migrate dev```	
6. Correr el proyecto con ```npm run dev```.


## Correr en produccion