import { publicRequest } from "@/libs/requestMethods";

export async function generateStaticParams() {
  const blogs = await publicRequest.get(`/blogs`);
  // console.log(products);
  if (!blogs) return [];
  return blogs?.data?.map((blog) => ({
    slug: blog.slug.toString(),
  }));
}
export default async function BlogPage({ params: { slug } }) {
  const blog = await publicRequest.get(`/blogs/slug/${slug}`);
  console.log({ blog });
  return <div>page</div>;
}
