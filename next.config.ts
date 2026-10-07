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
      // Retired role URLs (Oct 2026) point at the cohort track that replaced them
      ...[
        ["growth-hacker", "growth"],
        ["founders-office", "growth"],
        ["strategic-growth-partner", "growth"],
        ["content-creator", "content"],
        ["video-and-post-editor", "content"],
        ["researcher", "research"],
        ["developer-intern", "build"],
        ["web-developer", "build"],
        ["automation-builder", "build"],
      ].flatMap(([from, to]) => [
        { source: `/careers/${from}`, destination: `/careers/${to}`, permanent: true },
        { source: `/careers/${from}/apply`, destination: `/careers/${to}/apply`, permanent: true },
      ]),
    ];
  },
};

export default nextConfig;
