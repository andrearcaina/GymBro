import { Navbar, Footer } from '@/components';
import "./globals.css";

export const metadata = {
  title: "GymBro",
  description: "gym bro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="space-y-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
