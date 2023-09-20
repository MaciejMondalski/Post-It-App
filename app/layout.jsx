import "./globals.css";
import Nav from "./authentication/Nav";
import { Roboto } from "next/font/google";

// Subsets are really important. CHECK BELOW FOR MORE INFO
// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const roboto = Roboto({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
});
// Head metadata
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-blue-50 mx-4 md:mx-48 xl:mx-96 ${roboto.className} `}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
