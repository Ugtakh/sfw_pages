import React, { Suspense, useEffect, useState } from "react";
import Banner from "@/components/Banner/Banner";
import Companies from "@/components/Companies/Companies";
import Buyers from "@/components/Buyers/index";
import Provide from "@/components/Provide/index";
import Why from "@/components/Why/index";
import Clientsay from "@/components/Clientsay/index";
import News from "@/components/News";
import { INews, getAllNews } from "@/utils/sanity/sanityApi";
import client from "@/utils/sanity/sanity";
import { groq } from "next-sanity";

export default function Home() {
  // const news: INews[] =
  const [news, setNews] = useState<INews[]>([]);
  // const news = (await getNews()) as INews[];

  async function getNews() {
    const query = groq`*[_type == "news"]{ 
        title, 
        date, 
        'image': cover_image.asset->url, 
        'publisher': publisher->{title, 'avatar': avatar.asset->url}, 
        'slug':slug.current, 
        _createdAt 
    } | order(date desc)`;

    const newses: INews[] = await client.fetch(query);
    console.log("KK", newses);
    setNews(newses);
    // return news;
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    // <Suspense fallback={<div>Уншиж байна.</div>}>
    <main>
      <Banner />
      {/* <Companies /> */}
      <Buyers />
      <Provide />
      <Why />
      <News news={news} />
      {/* <Clientsay /> */}
      {/* <Newsletter /> */}
    </main>
    // </Suspense>
  );
}
