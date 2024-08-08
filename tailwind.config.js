/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      FontFamily: "var(--FontFamily)",
    },
    extend: {
      colors: {
        BgColor: "var(--BgColor)",
        CommonColor: "var(--CommonColor)",
        BtnColor: "var(--BtnColor)",
        SkillColor: "var(--SkillColor)",
        FooterColor: "var(--FooterColor)",
      },
    },
  },
  plugins: [],
}