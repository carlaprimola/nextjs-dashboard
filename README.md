## Repositorio para aprender Next.js

Si quieres clonar el repositorio:

```bash
git clone https://github.com/carlaprimola/nextjs-dashboard.git
```

Si quieres empezar de cero. Primero debes instalar la plantilla de Vercel:

```bash
npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
```

**Para la DB vamos a usar Vercel Storage:**
    1. Primero debes tener creada una cuenta en Vercel y hacer login
    2. Debes ir a tu perfil a la sección STORAGE
    3. Crear una nueba DB con SQL (Postgres)
    4. Le das un nombre y una zona horaria
    5. Ahora necesitamos instalar Vercel en nuestro Proyecto para usar el archivo 'seed.js' que contiene nuestra db
        ```bash
        npm install @vercel/postgres
        ```
    6. En package.json añadimos:
    7. ```bash
         "seed": "node --require dotenv/config ./scripts/seed.js"
        ```
    8. Ejecutamos la aplicacion
        ```bash
        npm run seed
        ```
    9. Ahora si vamos a Vercel, dentro de nuestra DB y hacemos clic en Data, veremos que ya tenemos vinculada nuestra DB


 [Guía Vercel](https://nextjs.org/learn/dashboard-app/getting-started)


