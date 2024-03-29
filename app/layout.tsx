import "./globals.css";
import "../styles/scss/style.scss";

import { NavBar, Footer } from "@components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        {children}
        <Footer />
      </body>
    </html>
  );
}
