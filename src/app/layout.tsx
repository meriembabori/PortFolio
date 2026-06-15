import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MERIEM BABORI | Geospatial Portfolio",
  description:
    "Master's student in Geomatics specialized in GIS, Remote Sensing, and Photogrammetry. Portfolio showcasing geospatial projects, skills, and experience.",
  keywords: [
    "Meriem Babori",
    "Geomatics",
    "GIS",
    "Remote Sensing",
    "Photogrammetry",
    "Spatial Analysis",
    "Casablanca",
  ],
  openGraph: {
    title: "MERIEM BABORI | Geospatial Portfolio",
    description:
      "Premium geospatial portfolio with GIS, Remote Sensing, and Photogrammetry projects.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MERIEM BABORI | Geospatial Portfolio",
    description:
      "GIS, Remote Sensing, Photogrammetry, and environmental geospatial projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${dmSerif.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
