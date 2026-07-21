import type { NextConfig } from "next";

// Stable Vercel aliases for this project. Requests on these hosts redirect to
// the canonical domain so they never compete with go.janeshomecare.com in
// search. Per-deploy preview URLs are left alone, and partners.janeshomecare.com
// (same project) is unaffected.
const VERCEL_ALIASES = [
  "janes-landing.vercel.app",
  "janes-landing-hdnv.vercel.app",
  "janes-landing-keihonsarks-projects.vercel.app",
  "janes-landing-git-main-keihonsarks-projects.vercel.app",
];

const nextConfig: NextConfig = {
  async redirects() {
    return VERCEL_ALIASES.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://go.janeshomecare.com/:path*",
      permanent: true,
    }));
  },
  async rewrites() {
    return [
      {
        source: '/refer',
        destination: '/refer.html',
      },
      {
        source: '/partners',
        destination: '/partners.html',
      },
    ];
  },
};

export default nextConfig;
