"use client";
import BlogPost from "@/components/blog/BlogPost";
import Layout from "@/components/layout/Layout";
import client from "@/util/sanity";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";

export default async function Blog() {
  const [news, setNews] = useState([]);

  const getAllNews = async () => {
    const query = groq`*[_type == "news"]{ 
        title, 
        date, 
        'image': cover_image.asset->url, 
        'publisher': publisher->{title, 'avatar': avatar.asset->url}, 
        'slug':slug.current, 
        _createdAt 
    } | order(date desc)`;

    const news = await client.fetch(query);
    setNews(news);
    // return news;
  };
  const getAllPdfs = async () => {
    console.log("START");
    const query = groq`*[_type == "report"]{ 
        report_description, 
        report_date, 
        'file_url': report_file.asset->url,  
    }`;

    const pdfs = await client.fetch(query);
    console.log("PDF", pdfs);
    // setNews(news);
    // return news;
  };
  useEffect(() => {
    // getAllNews();
    // getAllPdfs();
  }, []);

  return (
    <>
      {/* <Layout headerStyle={1} footerStyle={1}> */}
      <div className="col-lg-4">
        {/* <BlogPost showItem={6} style={1} showPagination /> */}
      </div>
      {/* </Layout> */}
    </>
  );
}
