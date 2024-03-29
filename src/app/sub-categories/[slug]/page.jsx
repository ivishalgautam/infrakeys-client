"use client";
import CenterHeading from "@/components/CenterHeading";
import Viewmore from "@/components/Viewmore";
import { publicRequest } from "@/libs/requestMethods";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Page({ params: { slug } }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    publicRequest
      .get(`/sub-categories/slug/${slug}`)
      .then(({ data }) => {
        return data;
      })
      .then(async (data) => {
        const resp = await publicRequest.get(`/products`);
        setProducts(
          resp.data.filter((item) => item.sub_category_id === data.id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);
  return (
    <>
      <section className="commonSection">
        <div className="container-fluid">
          <CenterHeading heading={slug.split("-").join(" ")} />
          <div className="row mt-3">
            {products?.map((product, key) => {
              return (
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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
