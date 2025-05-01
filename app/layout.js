import { Outfit,Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],weight:["400","500","600"]
});

const ovo = Ovo({
  subsets: ["latin"],weight:["400"]
});

 const metadata = {
  title: "Portfolio - Anjali Valani",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-blue-950 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
