/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,mdx}"],
  prefix: "service-",
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: process.env.NODE_ENV !== "production",
  },
  plugins: [],
};
