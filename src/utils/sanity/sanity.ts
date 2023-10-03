// import SanityClient from "next-sanity-client";
import { createClient, type ClientConfig } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  useCdn: true,
  apiVersion: "2023-07-25",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN || "",
};

const client = createClient(config);
const builder = ImageUrlBuilder(client);

export default client;

export const urlFor = (source: any) => builder.image(source);
