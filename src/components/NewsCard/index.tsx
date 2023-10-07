import React from "react";
import { format } from "date-fns";
import { INews } from "@/utils/sanity/sanityApi";
import { urlFor } from "@/utils/sanity/sanity";

const NewsCard = ({ news }: { news: INews }) => {
  return (
    <div className="mb-6 lg:mb-0 ">
      <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="flex justify-center">
          <div
            className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg w-full"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img src={news.image} alt="news" className="w-full h-60" />
            {/* <img
              src={urlFor(news.image).height(240).url()}
              alt="news"
              className="w-full h-60"
            /> */}
            {/* <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
            </a> */}
          </div>
        </div>
        <div className="p-6">
          <h5 className="mb-3 text-lg font-bold truncate">{news.title}</h5>
          <p className="mb-4 text-neutral-500 dark:text-neutral-300">
            <small>
              Нийтэлсэн: {format(new Date(news.date), "yyyy/MM/dd")}{" "}
            </small>
          </p>
          {/* <p className="mb-4 pb-2">{"content"}</p> */}
          <a
            href={`/news/${news.slug}`}
            data-te-ripple-init
            data-te-ripple-color="light"
            className="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600  focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Дэлгэрэнгүй...
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

// src={
//                 news.image ||
//                 "https://mdbcdn.b-cdn.net/img/new/standard/city/024.webp"
//               }
