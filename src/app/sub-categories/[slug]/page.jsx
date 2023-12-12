"use client";
import CenterHeading from "@/components/CenterHeading";
import Viewmore from "@/components/Viewmore";
import { publicRequest } from "@/libs/requestMethods";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export async function generateStaticParams() {
  const categories = await publicRequest.get(`/sub-categories`);
  // console.log(categories);
  if (!categories) return [];
  return categories?.data?.map((category) => ({
    slug: category.slug.toString(),
  }));
}

export async function getServerSideProps({ slug }) {
  try {
    const { data } = await publicRequest.get(
      `/sub-categories/slug/${params.slug}`
    );
    const resp = await publicRequest.get(`/products`);
    const products = resp?.data?.filter(
      (item) => item.sub_category_id === data.id
    );

    return {
      props: {
        slug: slug,
        products,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        slug: slug,
        products: [],
      },
    };
  }
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
      title: data.title,
      description: data.about,
      keywords: data.keywords,
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

export default function Page({ params: { slug, products: product } }) {
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    publicRequest
      .get(`/sub-categories/slug/${slug}`)
      .then(({ data }) => {
        return data[0];
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);
  return (
    <>
      <section className="commonSection">
        <div className="container-fluid">
          <CenterHeading heading={slug} />
          <div className="row mt-3">
            {/* {products?.map((product, key) => {
              return ( */}
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="productCard" key={product.id}>
                <div className="productImg">
                  <Image
                    src={`https://infrakeysapp.in${product?.images[0]}`}
                    height={150}
                    width={300}
                    alt={`${product?.title} Products | Infrakeys`}
                  />
                </div>
                <div className="productContent">
                  <Link href="/">
                    <h3>{product?.title}</h3>
                  </Link>
                  <p>
                    {product.about.length > 150
                      ? product.about.substring(0, 150) + "..."
                      : product.about}
                  </p>
                  <Viewmore viewLink={`/products/${product?.slug}`} />
                </div>
              </div>
            </div>
            {/* );
            })} */}
          </div>
        </div>
      </section>
    </>
  );
}
