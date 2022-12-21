import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  //go to https://www.sanity.io/manage
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // under title project id
  dataset: "production", // inside dataset
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN, // api/addCORS Orgin give link localhost300 and editable
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
