"use client";

import dynamic from "next/dynamic";

const HomePageWrapper = dynamic(() => import("./HomePageWrapper"), {
  ssr: false
});

export default function DynamicHomeWrapper({ blogs }) {
  return <HomePageWrapper blogs={blogs} />;
}
