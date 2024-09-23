"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });


const links=["post","Messages"]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname=usePathname();
  return (
    <html lang="en">
     
      <body>
      <header style={{
        backgroundColor:"lightblue",
        padding:"1rem"
      }}>
        <div>
          {
            links.map((link,index)=>{
              return <Link href={"/post/"} key={index} style={pathname.endsWith(link)?{color:"blue"}:{color:"black"}}> {link}</Link>
            })
          }
        </div>
      </header>
        {children}
      <footer style={{
        backgroundColor:"ghostwhite",
        padding:"1rem"
      }}>footer</footer>

      </body>
    </html>
  );
}
