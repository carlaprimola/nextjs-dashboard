## Repositorio para aprender Next.js

Si quieres clonar el repositorio:

```bash
git clone https://github.com/carlaprimola/nextjs-dashboard.git
```

Si quieres empezar de cero. Primero debes instalar la plantilla de Vercel:

```bash
npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
```

- **Para la DB, utilizaremos Vercel Storage:**
   1. Crea una cuenta en Vercel e inicia sesión.
   2. Ve a tu perfil y accede a la sección STORAGE.
   3. Crea una nueva DB con SQL (Postgres).
   4. Asigna un nombre y una zona horaria a la DB.
   5. Instala Vercel en tu proyecto para utilizar el archivo 'seed.js':
      ```bash
      npm install @vercel/postgres
      ```
   6. En el archivo `package.json`, añade:
      ```bash
      "seed": "node --require dotenv/config ./scripts/seed.js"
      ```
   7. Ejecuta la aplicación con:
      ```bash
      npm run seed
      ```
   8. Ve a Vercel, entra en tu DB y haz clic en Data.
   9. Observa que la DB ya está vinculada.



 [Guía Vercel](https://nextjs.org/learn/dashboard-app/getting-started)


