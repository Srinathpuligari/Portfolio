"use client";

import { ToastContainer } from "react-toastify";
import ScrollToTop from "./helper/scroll-to-top";
import Navbar from "./navbar";

export default function ClientLayout({ children }) {
  return (
    <>
      <ToastContainer />
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar />
        {children}
        <ScrollToTop />
      </main>
    </>
  );
}
