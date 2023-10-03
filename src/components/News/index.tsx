import { INews } from "@/utils/sanity/sanityApi";
import NewsCard from "../NewsCard";
// import { getAllNews } from "../../utils/sanity/sanityApi";

// import useSWR from "swr";

// const fetcher = (url: string, init: any) =>
//   fetch(url, init).then((res) => res.json());

// export const useNews = () => {
//   const { data, error } = useSWR<{ news: INews[] }>("api/news", fetcher, {
//     refreshInterval: 5000,
//   });

//   console.log("dataSWR", data);

//   return { news: data?.news, loading: !error && !data, error: error };
// };

const News = ({ news }: { news: INews[] }) => {
  // const { news, error, loading } = useNews();

  // if (error) return <div>Алдаа гарлаа</div>;
  // if (!data) return <div className="text-center">...</div>;

  return (
    <div id="project">
      <div className="container my-5 mx-auto py-5">
        <div className="mb-5 text-center">
          <h2 className="mb-12 pb-4 text-center text-3xl font-bold">
            Сүүлийн үеийн нийтлэлүүд
          </h2>
          {/* News Card Container */}
          <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
            {news &&
              news.map((el: any, id: any) => <NewsCard key={id} news={el} />)}
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default News;
