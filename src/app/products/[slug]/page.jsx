import ProductCard from "@/components/ProductCard";
import { publicRequest } from "@/libs/requestMethods";

export async function generateStaticParams() {
  const products = await publicRequest.get(`/products`);
  // console.log(products);
  if (!products) return [];
  return products?.data?.map((product) => ({
    slug: product.slug.toString(),
    id: product?.id,
  }));
}

export async function generateMetadata({ params: { slug } }) {
  try {
    const { data } = await publicRequest.get(`/products/slug/${slug}`);

    if (!data) {
      return {
        title: "Not Found!",
        description: "The page you you looking for does not exist!",
        keywords: "Not found",
      };
    }
    return {
      title: data?.meta_title || data?.title,
      description: data?.meta_desc,
      keywords: data?.keywords,
    };
  } catch (error) {
    console.log(error);
    return {
      title: "Not Found!",
      description: "The page you you looking for does not exist!",
      keywords: "Not found",
    };
  }
}

export default async function Page({ params: { slug, id } }) {
  return <ProductCard slug={slug} id={parseInt(id)} />;
}
