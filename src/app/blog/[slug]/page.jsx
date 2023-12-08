import { publicRequest } from "@/libs/requestMethods";
import Image from "next/image";
import Link from "next/link";
import { RiUser3Line } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import { trim } from "../../../../utils/trim";

export async function generateStaticParams() {
  const blogs = await publicRequest.get(`/blogs`);
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
  const blogs = await publicRequest.get(`/blogs`);
  // console.log(blogs.data);
  const { data } = await publicRequest.get(`/blogs/slug/${slug}`);
  // console.log({ data });
  return (
    // <section className="commonSection">
    <div className="container mt-4 mb-4">
      <div className="row">
        {/* blog */}
        <div className="col-lg-8 col-sm-12">
          <div className="blog-section">
            <p>
              <Link href="/">Home</Link>
              {" > "}
              <Link href="/">Blogs</Link>
              {" > "}
              {data?.title}
            </p>
            <div style={{ height: "30%" }} className="image-container">
              <Image
                src={`https://infrakeysapp.in${data?.image}`}
                fill
                className="image"
                alt={data.title}
              />
            </div>
            <div className="blog-post-date">
              <div>
                <MdOutlineDateRange />
                <span className="date">
                  {new Date(data?.created_at).toDateString()}
                </span>
              </div>
              <div>
                <RiUser3Line />
                <span>Admin</span>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.content.replace("<p><br></p>", ""),
              }}
            ></div>
          </div>
        </div>

        {/* recent blogs */}
        <div className="col-lg-4 col-sm-12">
          <div className="recent-blogs">
            <h6>Recent blogs</h6>
            {blogs?.data
              ?.filter((blog) => blog.id !== data?.id)
              .slice(0, 5)
              .map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.slug}`}>
                  <div className="recent-blog-card items-start mb-2">
                    <div className="img">
                      <Image
                        src={`https://infrakeysapp.in${blog.image}`}
                        width={50}
                        height={50}
                        alt={blog.title}
                      />
                    </div>
                    <div className="title">
                      <div>{new Date(blog.created_at).toDateString()}</div>
                      <p>{trim(blog.title, 30)}</p>
                    </div>
                    <div className="category">{blog.category}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
    // </section>
  );
}
