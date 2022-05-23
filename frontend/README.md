# Frontend

## config

create an `.next.config.js` file and fill the data accordin'to your config

```sh
cp  next.config.dist.js next.config.js
```

next.config.js
```js
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/server/:path*",
        destination: "http://localhost:3001/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
```

## dev

, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## build
```sh
npm run build
# or
yarn build
# or
pnpm build
```
## start
```sh
npm run start
# or
yarn start
# or
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

