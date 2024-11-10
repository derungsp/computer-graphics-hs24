# `SWISS CODE L.L.C Boilerplate v2`

This is a boilerplate project scaffolding your next developing project.

# Installation

- Clone the repository from [our private GitHub repository](https://github.com/SWISS-CODE-L-L-C/boilerplate-v2).
- Install dependencies:

```bash
cd boilerplate-project-v2
npm i
```

- Configure your local environment:

```bash
cp .env.example .env
```

- Push your Prisma schema to the database (it will automatically invoke <code>[prisma generate](https://www.prisma.io/docs/concepts/components/prisma-migrate/db-push)</code>):

```bash
npm run db:push
```

- Populate the database with the seed:

```bash
npm run seed
```

- Run the server (login credentials are inside placeholder-data.js file located in /app/lib directory)

```bash
# development mode
npm run dev

# production mode
npm run build
npm run start
```

- Run Prisma studio:

```bash
npm run db:studio
```

# Security

Out of the box, Next.js provides security for different vulnerabilities, here are some of the security considerations that Next.js helps to address:

- [Cross-Site Scripting (XSS) Protection](https://nextjs.org/docs/pages/building-your-application/configuring/content-security-policy) - Next.js supports automatic HTML escaping by default. It uses React's server-side rendering to sanitize user inputs, helping to prevent XSS attacks. By using [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) your Next.js application is guarded against cross-site scripting (XSS), clickjacking, and other code injection attacks.
- [SQL Injection](https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#sql-injection) - Prisma mitigates the risk of SQL injection by escaping all variables when tagged templates are being used and sends all queries as prepared statements. [Check the docs](https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#sql-injection) for more information about the specific case where there is a vulnerability to SQL injection.

# Technologies

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
