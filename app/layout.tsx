import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/main/StarBackground";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Thang Nguyen" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>ThangDevAlone Portfolio</title>
        <meta name="title" content="ThangDevAlone Portfolio" />
        <meta
          name="description"
          content="Hey there! I am ThangDevAlone. I'm a Full Stack Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thangdevalone.vercel.app/" />
        <meta property="og:title" content="ThangDevAlone Portfolio" />
        <meta
          property="og:description"
          content="Hey there! I am ThangDevAlone. I'm a Full Stack Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills."
        />
        <meta property="og:image" content="/NavLogo.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://thangdevalone.vercel.app/"
        />
        <meta property="twitter:title" content="ThangDevAlone Portfolio" />
        <meta
          property="twitter:description"
          content="Hey there! I am ThangDevAlone. I'm a Full Stack Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills."
        />
        <meta property="twitter:image" content="/NavLogo.jpg" />
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
