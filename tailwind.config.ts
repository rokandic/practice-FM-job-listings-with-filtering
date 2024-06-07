import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        desaturatedDarkCyan: "hsl(180, 29%, 50%)",
        lightGrayishCyan: "hsl(180, 52%, 96%)",
        lightGrayishCyanTablets: "hsl(180, 31%, 95%)",
        darkGrayishCyan: "hsl(180, 8%, 52%)",
        veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
      backgroundImage: {
        bgHeaderMobile: `url(${process.env.NEXT_PUBLIC_BASEPATH}/bg-header-mobile.svg)`,
        bgHeaderDesktop: `url(${process.env.NEXT_PUBLIC_BASEPATH}/bg-header-desktop.svg)`,
      },
      fontSize: {
        sm: "0.8rem",
        base: "1.0rem",
        lg: "1.1rem",
        xl: "1.2rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      screens: {
        lg: process.env.DESKTOP_BREAKPOINT ?? "60rem",
      },
    },
  },
  plugins: [],
};
export default config;
