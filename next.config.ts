import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tal-vi",
        destination: "/for-businesses",
        permanent: true,
      },
      {
        source: "/venture-lab",
        destination: "/think-and-build",
        permanent: true,
      },
      {
        source: "/for-new-ideas",
        destination: "/think-and-build",
        permanent: true,
      },
      {
        source: "/work-with-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/how-it-works",
        destination: "/how-we-work",
        permanent: true,
      },
      // Roles retired in the Oct 2026 careers revamp; old links land on the current roles
      {
        source: "/careers/:slug(content-creator|developer-intern|growth-hacker)",
        destination: "/careers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
