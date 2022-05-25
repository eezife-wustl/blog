import { getStrapiURL } from "./api";

// export function getStrapiMedia(media) {
//   const imageUrl = media.url.startsWith("/")
//     ? getStrapiURL(media.url)
//     : media.url;
//   return imageUrl;
// }

export function getStrapiMedia(media) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}