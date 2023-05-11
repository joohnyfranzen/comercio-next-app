## API Routes

### Product

```bash
"/api/product"
[GET] = findMany where:deleted=false
[POST] = create:{name, price, state}
"/api/product/id"
[GET] = product where:{id: id}
[DELETE] = product where:{id: id}
[PUT] = update product where:{id: id} data:{name, price, state}
```

### User

```bash
"/api/user"
[GET] = findMany include address
[POST] = create:{name, email, password, phoneNumber, address: {street, city, state}}
"/api/user/id"
[GET] = user where:{id: id}
[DELETE] = user where:{id: id}
[PUT] = update user where:{id: id} data:{updateData}
```

### Auth

#### Login

```bash
"/api/auth/login"
[POST] = findFirst where:email, password
```

#### Register

```bash
"/api/auth/register"
[POST] create:{email, password}
```

### Pages & Forms

```bash
"/admin/produtos" = [GET] /api/product, ✓ [DELETE] /api/product/id ✓
"/admin/novoproduto" = [POST] /api/product ✓
"/admin/editarproduto" = [GET] /api/product/id ✓ [PUT] /api/product/id ✓ [PUT] /api/inventory/id ✓ OR [POST] /api/inventory ✓
"/admin/vendas" = [GET] /api/userproduct ✓, [DELETE] /api/userproduct/id ✓
"/admin/venda" = [GET] /api/userproduct/id ✓,
"/admin/novavenda" = [POST] /api/userproduct
# "/admin/editarvenda" = [GET] /api/userproduct/id [PUT] /api/userproduct/id
"/admin/novousuario" = [POST] /api/user
# [DELETE] /api/userproduct/id
# "/admin/usuarios" = [GET] /api/user, [DELETE] /api/user/id
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```

```
