// import SanityClient from "next-sanity-client";
import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  useCdn: true,
  apiVersion: "2023-07-25",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN || "",
};

const client = createClient(config);
const builder = ImageUrlBuilder(client);

export default client;

export const urlFor = (source) => builder.image(source);

// import { INews, getAllNews } from "@/utils/sanity/sanityApi";
// import client from "@/utils/sanity/sanity";
// import { groq } from "next-sanity";

// export default function Home() {
//   // const news: INews[] =
//   const [news, setNews] = useState<INews[]>([]);
//   // const news = (await getNews()) as INews[];

//   async function getNews() {
//     const query = groq`*[_type == "news"]{
//         title,
//         date,
//         'image': cover_image.asset->url,
//         'publisher': publisher->{title, 'avatar': avatar.asset->url},
//         'slug':slug.current,
//         _createdAt
//     } | order(date desc)`;

//     const newses: INews[] = await client.fetch(query);
//     setNews(newses);
//   }

//   useEffect(() => {
//     getNews();
//   }, []);
