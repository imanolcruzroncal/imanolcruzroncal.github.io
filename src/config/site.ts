const site = {
  // --- Site Metadata ---
  meta: {
    title: "Engineering & Data Science",
    description: "Collection of engineering projects, data science work, and applied research focused on data-driven decision making and operational excellence",
    author: "Imanol Cruz",
    logo: "/logo.svg",
    ogImage: "/og-image.png",
    // HTML lang attribute, affects page language and date formatting
    // Options: "zh-CN", "en", "ja", etc.
    lang: "en",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
  navigation: [
    { name: "Home", subtitle: "Index", href: "/" },
    { name: "About", subtitle: "Me", href: "/about" },
    { name: "Projects", subtitle: "Works", href: "/projects" },
    { name: "Dashboards", subtitle: "Analytics", href: "/posts" },
    
  ],

  // --- Social Links ---
  social: [
    { name: "GitHub", href: "https://github.com/imanolcruzroncal", icon: "mdi:github" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/imanolcruzroncal", icon: "mdi:linkedin" },
    { name: "Email", href: "mailto:imanolcruzroncal@gmail.com", icon: "mdi:email" },
  ],

  // --- Homepage Hero ---
  hero: {
    greeting: "Abraham Imanol Cruz Roncal",
    // Supports HTML. Use <span class="font-medium text-foreground underline decoration-primary/30"> to highlight keywords
    description:
      'Industrial Engineer and M.S. candidate in Engineering Management applying quantitative analysis, statistical modeling, and structured project execution to optimize operational systems.',
    cards: [
      { icon: "mdi:briefcase", label: "Focus", value: "Data Science" },
      { icon: "mdi:location", label: "Location", value: "Chattanooga, TN" },
    ],
  },

  // --- Footer ---
  footer: {
    copyright: "© 2026 Imanol Cruz",
    builtWith: "Built with Astro",
  },

  // --- Comments ---
  comments: {
    enabled: false,
    provider: "artalk" as const,
    artalk: {
      server: "https://your-artalk-server.com",
    },
  },

  // --- Feature Toggles ---
  features: {
    search: true,
    rss: true,
  },

  // --- Tools Page Data ---
  tools: [
    { name: "development", items: ["VS Code", "Terminal", "Chrome", "Git"] },
    { name: "design", items: ["Figma"] },
  ],

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    postsTitle: "Dashboards",
    postsDescription: "Interactive dashboards, KPI tracking, and analytical reports.",
    projectsTitle: "Projects",
    projectsDescription: "Selected engineering and data science projects.",
    aboutTitle: "About",
    aboutDescription: "Background, skills, and experience.",
    backToPosts: "Back to dashboards",
    goHome: "Go Home",
    notFoundTitle: "Page not found",
    notFoundDescription: "The page you're looking for may have been removed or the link is broken.",
    endOfPost: "End of Dashboard",
    tableOfContents: "Contents",
    searchPlaceholder: "Search dashboards or keywords...",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
