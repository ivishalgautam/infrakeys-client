import { publicRequest } from "@/libs/requestMethods";

export default async function Sitemap() {
  const baseUrl = "https://www.infrakeys.com";

  // sub-categories urls
  const subResp = await publicRequest.get("/sub-categories");
  const subUrls =
    subResp?.data?.map((sub) => {
      return {
        url: `${baseUrl}/sub-categories/${sub.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];

  //blogs urls
  const blogResp = await publicRequest.get("/blogs");
  const blogUrls =
    blogResp?.data?.map((blog) => {
      return {
        url: `${baseUrl}/blogs/${blog.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];

  //product urls
  const productResp = await publicRequest.get("/products");
  const productUrls =
    productResp?.data?.map((product) => {
      return {
        url: `${baseUrl}/products/${product.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...subUrls,
    ...blogUrls,
    ...productUrls,
  ];
}
