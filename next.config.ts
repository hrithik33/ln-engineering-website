import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
