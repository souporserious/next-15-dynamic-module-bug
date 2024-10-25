# next-15-dynamic-module-bug

Reproduction of a bug in Next.js 15 where dynamic modules that include Client Components error when imported in a Server Component when using Webpack. This works as expected when using the `--turbopack` flag.

## Development

```bash
npm install
npm run dev
```
