import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Component/Header/Header";


export const metadata = {
  title: "User listing",
  description: "This is user listing application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-slate-50`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
