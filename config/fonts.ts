import { Poppins as FontPoppins, Cormorant_Garamond as FontCormorantGaramond } from "next/font/google";

export const fontPoppins = FontPoppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const fontCormorantGaramond = FontCormorantGaramond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["300", "400", "500", "600", "700"],
});
