"use client";

import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("./HomePage"), { ssr: false });

export default function HomePageWrapper({ blogs }) {
  return <HomePage blogs={blogs} />;
}
