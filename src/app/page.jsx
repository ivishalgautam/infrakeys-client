import CategoriesHome from "@/components/CategoriesHome";
import Hero from "@/components/Hero";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Infrakeys | Best Parts Material Seller ",
};
export default function Page() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5W81C4E1WN"
      />
      <Script>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5W81C4E1WN');`}
      </Script>

      <Hero />
      <CategoriesHome />
    </>
  );
}
