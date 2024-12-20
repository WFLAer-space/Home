export const SITE_CONFIG = {
  name: 'WFLAer.space',
  description: 'Enhancing educational experiences through innovative technology',
  contact: {
    email: 'service@wflaer.space',
    wechat: 'dbccccwx',
  },
} as const;

export const PROJECTS = [
  {
    name: "Derive AI",
    url: "https://ai.wflaer.space",
    description: "Advanced AIGC platform for WFLA students and teachers",
    status: "beta",
    featured: true,
  },
  {
    name: "Resource Hub",
    url: "https://files.wflaer.space",
    description: "Centralized platform for academic resources",
    status: "active",
  },
  {
    name: "GDC Tutorial",
    url: "https://gdc.wflaer.space",
    description: "Exclusive GDC user guide for quick start for beginners",
    status: "active",
  },
  {
    name: "Campus Guide",
    url: "https://campus.wflaer.space",
    description: "Quick Search for Campus and Teacher Information",
    status: "legacy",
  },
  {
    name: "Links Collection",
    url: "https://links.wflaer.space",
    description: "Collection of useful links and resources",
    status: "legacy",
  },
] as const;