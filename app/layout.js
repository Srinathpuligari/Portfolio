import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import ClientLayout from "./components/client-layout";
import Footer from "./components/footer";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Srinath Puligari",
  description:
    "This is the portfolio of Srinath Puligari. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="hero.png" type="image/x-icon" />
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
