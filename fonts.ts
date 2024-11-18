import {
  EB_Garamond,
  Allura,
  Dancing_Script,
  Style_Script,
  Mr_De_Haviland,
} from "next/font/google";

export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
});
export const allura = Allura({
  subsets: ["latin"],
  weight: "400",
});

export const dancingScript = Dancing_Script({
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const styleScript = Style_Script({
  weight: ["400"],
  subsets: ["latin"],
});

export const MrDeHaviland = Mr_De_Haviland({
  weight: ["400"],
  subsets: ["latin"],
});
