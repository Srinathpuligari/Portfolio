import { personalData } from "@/utils/data/personal-data";
import HomePageWrapper from "./components/homepage/HomePageWrapper";

async function getData() {
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return [];
  }
}

export default async function Home() {
  const blogs = await getData();
  return <HomePageWrapper blogs={blogs} />;
}