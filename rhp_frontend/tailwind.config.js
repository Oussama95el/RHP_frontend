/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          DEFAULT: "#1eb3c7",
          "50": "#2bdcef",
          "100": "#17bed3",
          "200": "#29b9ca",
          "300": "#1eb3c7",
          "400": "#0c9eae",
          "500": "#00acc1",
          "600": "#028b9d",
          "700": "#08808e",
          "800": "#056774",
        },
        "secondary": "#ff5722",
        "success": "#4caf50",
        "info": "#00bcd4",
        "warning": "#ff9800",
        "danger": "#f44336",
        "light": "#f1f3f4",
        "dark": "#434242",
        "aquamarine": "#7fffd4",
        "soft-grey": "#f5f5f5",
      },

    },
  },
  plugins: [],
}
