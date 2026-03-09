import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ebombo: {
          primary: "#8056EB",
          accent: "#220E58",
          bg: "#FBFAFF",
          white: "#FFFFFF",
          dark: "#272727",
          secondary: "#2A2A2A",
          text: "#444444",
          orange: "#F78A0A",
          "orange-dark": "#FF6701",
          "light-purple": "#EEE8FF",
          gold: "#E8CF6E",
          divider: "#E2E2E2",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        "roboto-slab": ["var(--font-roboto-slab)", "serif"],
      },
      maxWidth: {
        container: "1140px",
      },
    },
  },
  plugins: [],
};

export default config;
