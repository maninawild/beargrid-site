import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/bear-grid-device", destination: "/history/original-platform/bear-device", permanent: true },
      { source: "/copy-of-bear-device", destination: "/history/original-platform/bear-grid-platform", permanent: true },
      { source: "/copy-of-bear-grid-platform", destination: "/history/original-platform/ai-interface", permanent: true },
      { source: "/sectors", destination: "/history/original-platform/sectors", permanent: true },
      { source: "/solutions", destination: "/history/original-platform/solutions", permanent: true },
      { source: "/about", destination: "/history/original-platform/about", permanent: true },
      { source: "/news", destination: "/history/original-platform/news", permanent: true },
      { source: "/jobs", destination: "/history/original-platform/jobs", permanent: true },
      { source: "/coming-soon-03", destination: "/history/original-platform/coming-soon-03", permanent: true },
      { source: "/copy-of-asp-bear-grid", destination: "/history/original-platform/copy-of-asp-bear-grid", permanent: true },
      { source: "/contacts", destination: "/contact", permanent: true },
      { source: "/technology", destination: "/history", permanent: true },
      { source: "/technology/platform", destination: "/history/original-platform", permanent: true },
      { source: "/history/original-platform/bear-grid-device", destination: "/history/original-platform/bear-device", permanent: true },
      { source: "/history/original-platform/copy-of-bear-device", destination: "/history/original-platform/bear-grid-platform", permanent: true },
      { source: "/history/original-platform/copy-of-bear-grid-platform", destination: "/history/original-platform/ai-interface", permanent: true },
      { source: "/history/original-platform/sectors", destination: "/history/original-platform/use-cases", permanent: true },
    ];
  },
};

export default nextConfig;
