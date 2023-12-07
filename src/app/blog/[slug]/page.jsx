import { publicRequest } from "@/libs/requestMethods";

export async function generateStaticParams() {
  const blogs = await publicRequest.get(`/blogs`);
  // console.log(products);
  if (!blogs) return [];
  return blogs?.data?.map((blog) => ({
    slug: blog.slug.toString(),
  }));
}

export async function generateMetadata({ params: { slug } }) {
  try {
    const { data } = await publicRequest.get(`/blogs/slug/${slug}`);

    if (!data) {
      return {
        title: "Not Found!",
        description: "The page you you looking for does not exist!",
        keywords: "Not found",
      };
    }
    return {
      title: data.title,
      description: data.summary,
      keywords: data.tags.join(", "),
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
export default async function BlogPage({ params: { slug } }) {
  const { data } = await publicRequest.get(`/blogs/slug/${slug}`);
  // console.log({ data });
  return <div>{JSON.stringify(data)}</div>;
}
