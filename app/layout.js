import { CartContextProvider } from "@/context/cartContext";
import "./globals.css";
import { Roboto_Flex } from "next/font/google";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sportnut store",
  description: "A sports ecommerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <CartContextProvider>{children}</CartContextProvider>
      </body>
    </html>
  );
}
