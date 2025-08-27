import "./globals.css";

export const metadata = {
  title: "Learnmade Ecommerce App",
  description: "Simple Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add Google Fonts CDN links for Geist Sans and Geist Mono */}
        <link href="https://fonts.googleapis.com/css2?family=Geist+Sans:wght@400;700&family=Geist+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
