/** @type {import('tailwindcss').Config} */
import daisyUi from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",

      "xxl": "1580px",

      "3xl": "2020px",

      "4xl": "2440px",

      xs: "360px",
    },
    extend: {
      colors: {
        violetColor: "var(--violetColor)",
        violetHoverBgColor: "var(--violetHoverBgColor)",
        violetHoverTextColor: "var(--violetHoverTextColor)",
        lightVioletColor: "var(--lightVioletColor)",
        hotPinkColor: "var(--hotPinkColor)",
        pinkColor: "var(--pinkColor)",
        orangeColor: "var(--orangeColor)",
        yellowColor: "var(--yellowColor)",
        redColor: "var(--redColor)",
        lightRedColor: "var(--lightRedColor)",
        blueColor: "var(--blueColor)",
        lightBlueColor: "var(--lightBlueColor)",
        cyanColor: "var(--cyanColor)",
        grayColor: "var(--grayColor)",
        pastelPinkColor: "var(--pastelPinkColor)",
        greenColor: "var(--greenColor)",
        lightGreenColor: "var(--lightGreenColor)",
        grayTextColor: "var(--grayTextColor)",
        textColor: "var(--textColor)",
        whiteColor: "var(--whiteColor)",
        placeHolderColor: "var(--placeHolderColor)",
        borderColor: "var(--borderColor)",
        bgColor: "var(--bgColor)",
        btnColor1: "var(--btnColor1)",
        btnColor2: "var(--btnColor2)",
        primaryColor: "var(--primaryColor)",
        loyalBlueColor: "var(--loyalBlueColor)",
        lightGrayColor: "var(--lightGrayColor)",
        violetTransparentColor: "var(--violetTransparentColor)",
        violetTransparentHoverColor: "var(--violetTransparentHoverColor)",
        activeVioletColor: "var(--activeVioletColor)",
        disabledColor: "var(--disabledColor)",
        // chart color code
        chartVioletColor: "var(--chartVioletColor)",
        chartGreenColor: "var(--chartGreenColor)",
        chartRedColor: "var(--chartRedColor)",
        chartBlueColor: "var(--chartBlueColor)",
        chartYellowColor: "var(--chartYellowColor)",
        chartPinkColor: "var(--chartPinkColor)",
        chartOrangeColor: "var(--chartOrangeColor)",
      },
      boxShadow: {
        light: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
    },
  },

  daisyui: {
    themes: [
      {
        cLight: {
          "--violetColor": "#6418C3",
          "--activeVioletColor": "#6418C3",
          "--violetTransparentColor": "#F6EEFF",
          "--violetTransparentHoverColor": "#e0c7ff",
          "--violetHoverBgColor": "#5C1DAD",
          "--violetHoverTextColor": "#F6EEFF",
          "--lightVioletColor": "#7526D9",
          "--hotPinkColor": "#E328AF",
          "--pinkColor": "#FFCFF2",
          "--orangeColor": "#FA8B41",
          "--yellowColor": "#FFAB2D",
          "--redColor": "#FF5243",
          "--lightRedColor": "#ff000013",
          "--blueColor": "#0080FF ",
          "--lightBlueColor": "#CCE6FF",
          "--cyanColor": "#5ECFFF ",
          "--grayColor": "#404040 ",
          "--pastelPinkColor": "#FAD8D6",
          "--greenColor": "#38E25D",
          "--lightGreenColor": "#d8ffe083",
          "--grayTextColor": "#636363",
          "--textColor": "#202020",
          "--whiteColor": "#ffffff",
          "--borderColor": "#DDDDE2",
          "--placeHolderColor": "#7c7c83",
          "--bgColor": "#F9F9F9",
          "--btnColor1": "#6418C3",
          "--btnColor2": "#A827E4",
          "--primaryColor": "#1890FF",
          "--loyalBlueColor": "#2255A6",
          "--lightGrayColor": "#8F8F8F",
          "--disabledColor": "#f4f4f5",
          // chart color code
          "--chartVioletColor": "#6418C3",
          "--chartGreenColor": "#4EE66F",
          "--chartRedColor": "#FF5243",
          "--chartBlueColor": "#0080FF",
          "--chartYellowColor": "#FFAB2D",
          "--chartPinkColor": "#FFCFF2",
          "--chartOrangeColor": "#FA8B41",
        },
        cDark: {
          "--violetColor": "#711BDA",
          "--activeVioletColor": "#711BDA",
          "--violetTransparentColor": "#27272a",
          "--violetTransparentHoverColor": "#18181b",
          "--violetHoverBgColor": "#5C1DAD",
          "--violetHoverTextColor": "",
          "--lightVioletColor": "#843BDD",
          "--hotPinkColor": "#E63FB7",
          "--pinkColor": "#490035",
          "--orangeColor": " #FB9A5A",
          "--yellowColor": " #FFB546",
          "--redColor": "#FF5243",
          "--lightRedColor": "#ff000009",
          "--blueColor": "#1A8CFF",
          "--lightBlueColor": "#00284C",
          "--cyanColor": "#77D6FF",
          "--grayColor": "#bfbfbf",
          "--pastelPinkColor": "#400B08",
          "--greenColor": "#64E981",
          "--lightGreenColor": "#00400D",
          "--grayTextColor": "#FFFFFF",
          "--textColor": "#ffffff",
          "--whiteColor": "#202020",
          "--placeHolderColor": "#7c7c83",
          "--borderColor": "#3f3f46",
          "--bgColor": "#131313",
          "--btnColor1": "#6418C3",
          "--btnColor2": "#A827E4",
          "--primaryColor": "#1890FF",
          "--loyalBlueColor": "#2255A6",
          "--lightGrayColor": "#8F8F8F",
          "--disabledColor": "#3f3f46",
          // chart color code
          "--chartVioletColor": "#711BDA",
          "--chartGreenColor": "#64E981",
          "--chartRedColor": "#FF5243",
          "--chartBlueColor": "#1A8CFF",
          "--chartYellowColor": "#FFB546",
          "--chartPinkColor": "#490035",
          "--chartOrangeColor": "#FB9A5A",
        },
        cGray: {
          "--violetColor": "#929294",
          "--activeVioletColor": "#d4d4d8",
          "--violetTransparentColor": "#27272a",
          "--violetTransparentHoverColor": "#8F8F8F",
          "--violetHoverBgColor": "#71717a",
          "--violetHoverTextColor": "#b5b9c2",
          "--lightVioletColor": "#929294",
          "--hotPinkColor": "#9ca3af",
          "--pinkColor": "#404040",
          "--orangeColor": "#b5b9c2",
          "--yellowColor": "#92929294",
          "--redColor": "#929294",
          "--lightRedColor": "#92929294",
          "--blueColor": "#0080FF ",
          "--lightBlueColor": "#CCE6FF",
          "--cyanColor": "#929294 ",
          "--grayColor": "#b5b9c2 ",
          "--pastelPinkColor": "#FAD8D6",
          "--greenColor": "#a1a1aa",
          "--lightGreenColor": "#3f3f46",
          "--grayTextColor": "#929294",
          "--textColor": "#ffffff",
          "--whiteColor": "#333333",
          "--placeHolderColor": "#929294",
          "--borderColor": "#404040",
          "--bgColor": "#2B2B2B",
          "--btnColor1": "#929294",
          "--btnColor2": "#9ca3af",
          "--primaryColor": "#92929294",
          "--loyalBlueColor": "#8F8F8F",
          "--lightGrayColor": "#8F8F8F",
          "--disabledColor": "#92929294",
          // chart color code
          "--chartVioletColor": "#f3f4f6",
          "--chartGreenColor": "#6b7280",
          "--chartRedColor": "#374151",
          "--chartBlueColor": "#1f2937",
          "--chartYellowColor": "#111827",
          "--chartOrangeColor": "#18181b",
        },
      },
    ],
  },
  plugins: [daisyUi],
};
