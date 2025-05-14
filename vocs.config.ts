import { defineConfig } from "vocs";
import { sidebar } from "./sidebar";

export default defineConfig({
  title: "mycelium",
  description:
    "fast, modular, extensible regenerative finance layer-2 blockchain",
  titleTemplate: "%s · mycelium",
  rootDir: ".",
  sidebar,
  theme: {
    accentColor: {
      light: "#1b1c16",
      dark: "#e9f450",
    },
    variables: {
      color: {
        background: { light: "#ffffff", dark: "#121211" },
      },
    },
  },
  iconUrl: {
    light: "/favicons/icon-mycelium-light.png",
    dark: "/favicons/icon-mycelium-light.png",
  },
  logoUrl: {
    light: "/logo-mycelium-light.svg",
    dark: "/logo-mycelium-light.svg",
  },
  ogImageUrl: {
    "/": "/og-image.png",
    "/docs":
      "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  },
  topNav: [
    { text: "Docs", link: "/docs/getting-started", match: "/docs" },
    {
      text: "Architecture",
      link: "/docs/architecture",
      match: "/architecture",
    },
  ],
  sponsors: [
    {
      name: "Ecosystem",
      height: 120,
      items: [
        [
          {
            name: "EcoFundMe",
            link: "https://ecofundme.com",
            image: "/Partners/ecofundme.svg",
          },
        ],
      ],
    },
  ],
});
