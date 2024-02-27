import reactAriaComponents from "tailwindcss-react-aria-components";
import daisyui from "daisyui";
import tailwindcssAnimated from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#D9D9D9",
        "light-gray": "#F2F2F2",
        "light-blue": "#5A8CE4",
        "dark-blue": "#194BAE",
        "dark-blue-60": "#6d8bc6",
        "black-40": "#8d8c8d",
        "black-60": "#5e5e5e",
      },
    },
  },
  plugins: [
    reactAriaComponents,
    tailwindcssAnimated,
    daisyui,
    // https://github.com/tailwindlabs/tailwindcss-intellisense/issues/227#issuecomment-1139895799
    ({ addUtilities }) => {
      addUtilities({
        ".absolute-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      });
    },
  ],
  daisyui: {
    themes: ["light"],
  },
};
