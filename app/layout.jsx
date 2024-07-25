import "./globals.css";

export const metadata = {
  title: "Hospital Management System",
  description: "Management system for hospitals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
