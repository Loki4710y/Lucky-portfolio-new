import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-ph:user-focus-bold",
        excerpt: "Hey there! I'm Lucky Mishra, a CS student & freelance web developer..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some stats about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "capital-football-academy",
        title: "Capital Football Academy",
        file: "markdown/projects/capital-football-academy.md",
        icon: "i-mdi:soccer",
        excerpt: "A marketing website built for a football academy..."
      },
      {
        id: "preeti-shoe-palace",
        title: "Preeti Shoe Palace",
        file: "markdown/projects/preeti-shoe-palace.md",
        icon: "i-mdi:shoe-sneaker",
        excerpt: "A business website for a local footwear retail store..."
      },
      {
        id: "nihao-pharmaceuticals",
        title: "Nihao Pharmaceuticals",
        file: "markdown/projects/nihao-pharmaceuticals.md",
        icon: "i-mdi:pill",
        excerpt: "My first client project — a pharmaceutical corporate site..."
      },
      {
        id: "interactive-solar-system",
        title: "Interactive Solar System",
        file: "markdown/projects/interactive-solar-system.md",
        icon: "i-mdi:orbit",
        excerpt: "A hand-gesture-controlled 3D solar system, built for fun..."
      }
    ]
  }
];

export default bear;
