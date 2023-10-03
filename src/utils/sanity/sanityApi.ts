import client from "./sanity";
import { groq } from "next-sanity";

export interface INews {
  title: string;
  date: string;
  slug: string;
  image: string;
  content: any[];
  publisher: {
    title: string;
    avatar: string;
  };
  _createdAt: string;
}

export const getAllNews = async (): Promise<INews[]> => {
  // const news: INews[] = await client.fetch({
  //   query: `*[_type == "news"]{ title, date, slug, _createdAt }`,
  //   config: { cache: "force-cache", next: { revalidate: 60 } },
  // });
  const query = groq`*[_type == "news"]{ 
        title, 
        date, 
        'image': cover_image.asset->url, 
        'publisher': publisher->{title, 'avatar': avatar.asset->url}, 
        'slug':slug.current, 
        _createdAt 
    } | order(date desc)`;

  const news = await client.fetch<INews[]>(query);

  return news;
};

export const getNewsBySlug = async (slug: string): Promise<INews> => {
  const query = groq`*[_type == "news" && slug.current == $slug]{ title, date, 'image': cover_image{alt, 'url': asset->url}, 'publisher': publisher->{title, 'avatar': avatar.asset->url}, content[]{..., 'asset': asset->}, 'slug':slug.current, _createdAt }`;

  const news = await client.fetch<INews[]>(query, { slug });

  return news[0];
};

export const creatNews = async (newsDat: any) => {
  const news = await client.create(newsDat);

  return news;
};
