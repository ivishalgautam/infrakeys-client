import CategoriesHome from "@/components/CategoriesHome";
import Hero from "@/components/Hero";
import Head from "next/head";
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
      {/* <!-- Google Tag Manager --> */}
      <script>
        {`function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WN9SB6DD');`}
      </script>
      {/* <!-- End Google Tag Manager --> */}
      <Hero />
      <CategoriesHome />
      {/* Google Tag Manager (noscript)  */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WN9SB6DD"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript)  */}
    </>
  );
}
