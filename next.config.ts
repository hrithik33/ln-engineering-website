import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/machines",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/resources",
        destination: "/machines",
        permanent: true,
      },
      {
        source: "/engineering",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/index.php",
        has: [
          {
            type: "query",
            key: "route",
            value: "product/category",
          },
        ],
        destination: "/machines",
        permanent: true,
      },
      {
        source: "/index.php",
        has: [
          {
            type: "query",
            key: "route",
            value: "information/information",
          },
        ],
        destination: "/about",
        permanent: true,
      },
      {
        source: "/index.php",
        has: [
          {
            type: "query",
            key: "route",
            value: "information/contact",
          },
        ],
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/documents/ln-verona-catalogue-optimized.pdf",
        destination: "/documents/product-catalogue.pdf",
        permanent: true,
      },
      {
        source: "/documents/ln-verona-catalogue.pdf",
        destination: "/documents/product-catalogue.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
