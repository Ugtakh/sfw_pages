import React, { useEffect, useState } from "react";
import moment from "moment";
import { INews } from "@/utils/sanity/sanityApi";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import client, { urlFor } from "@/utils/sanity/sanity";

// import { getNewsBySlug } from "@/utils/sanity/sanityApi";

const BlockContent = require("@sanity/block-content-to-react");

const serializers = {
  types: {
    code: (props: any) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    image: (props: any) => (
      <div className={`blog-image blog-image-${props.node.position}`}>
        {/* <img src={props.node} /> */}
        <img src={urlFor(props.node).height(800).url()} alt="photo" />
        {/* <div className="code-filename" style={{ textAlign: "center" }}>
          {props.node.alt}
        </div> */}
      </div>
    ),
  },
};

const NewsDetail = () => {
  const router = useRouter();

  const [news, setNews] = useState<INews | null>(null);

  const getNewsBySlug = async (slug: string) => {
    const query = groq`*[_type == "news" && slug.current == $slug]{ title, date, 'image': cover_image{alt, 'url': asset->url}, 'publisher': publisher->{title, 'avatar': avatar.asset->url}, content[]{..., 'asset': asset->}, 'slug':slug.current, _createdAt }`;

    const newses = await client.fetch(query, { slug });
    setNews(newses[0]);
    // return news[0];
  };

  useEffect(() => {
    console.log(router.query.slug);
    if (router.query.slug) getNewsBySlug(router.query.slug as string);
  }, [router.query.slug]);

  // const news = await getNewsBySlug(slug);

  // const defaultImage =
  //   "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";

  // const defaultImageContent =
  //   "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

  return (
    <div className="container mx-auto">
      {news && (
        <div className="mx-10">
          <div className="flex justify-start items-center">
            <img
              className="w-12 h-12 rounded-full mr-3"
              src={news.publisher.avatar}
              alt="avatar"
            />
            <p className="font-bold text-lg mr-3">
              {news.publisher.title}
              <span className="ml-3 text-xs text-[#999]">
                {moment(news.date).format("YYYY/MM/DD")}
              </span>
            </p>
          </div>
          <h1 className="text-2xl font-bold my-3">{news.title}</h1>
          {/* <img
          className="w-full  object-cover"
          src={urlFor(news.image || defaultImage)}
          alt="content cover"
        /> */}
          <br />
          <BlockContent
            blocks={news.content}
            serializers={serializers}
            imageOptions={{ w: 320, h: 240, fit: "max" }}
          />
        </div>
      )}
      <div className="clear-both"></div>
    </div>
  );
};

export default NewsDetail;
