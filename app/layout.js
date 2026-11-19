import "./globals.css";

export const metadata = {
  title: "Dogbajale Muhydeen — Software Engineer",
  description:
    "Dogbajale Muhydeen — Software / OSS / Datacom Engineer in Lagos, Nigeria. Building practical, user-focused digital solutions.",
  openGraph: {
    title: "Dogbajale Muhydeen — Software Engineer",
    description:
      "Software / OSS / Datacom Engineer in Lagos, Nigeria. Building practical, user-focused digital solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
