/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3c8b",
        "primary-content": "#b8c8f0",
        "primary-dark": "#0d203d",
        "primary-light": "#274eb5",

        secondary: "#1e8b57",
        "secondary-content": "#64FFDA",
        "secondary-dark": "#15613d",
        "secondary-light": "#27b571",

        background: "#efeff1",
        foreground: "#fbfbfb",
        border: "#dddee2",

        copy: "#232529",
        "copy-light": "#5e636e",
        "copy-lighter": "#848895",

        success: "#1e8b1e",
        warning: "#8b8b1e",
        error: "#8b1e1e",

        "success-content": "#b8f0b8",
        "warning-content": "#f0f0b8",
        "error-content": "#f0b8b8",
      },
    },
  },
  plugins: [],
};

/* TODO: MY COLOUR SETTINGS
 theme: {
        extend: {
            colors: {
                primary: "#1e3c8b",
                "primary-content": "#b8c8f0",
                "primary-dark": "#152a61",
                "primary-light": "#274eb5",

                secondary: "#1e8b36",
                "secondary-content": "#b8f0c4",
                "secondary-dark": "#156126",
                "secondary-light": "#27b546",

                background: "#eff0f0",
                foreground: "#fbfbfb",
                border: "#dedfe0",

                copy: "#252627",
                "copy-light": "#636569",
                "copy-lighter": "#898b8f",

                success: "#1e8b1e",
                warning: "#8b8b1e",
                error: "#8b1e1e",

                "success-content": "#b8f0b8",
                "warning-content": "#f0f0b8",
                "error-content": "#f0b8b8"
            },
        }
    },

 */
