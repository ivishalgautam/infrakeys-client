import CategoriesHome from "@/components/CategoriesHome";
import Hero from "@/components/Hero";
import Head from "next/head";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Best steel manufacturers in faridabad, Haryana",
  keywords:
    "steel manufacturers in faridabad,steel fabricators nera me,industrial steel in faridabad,Steel supplier in India,scaffolding manufacturer in faridabad",
  description:
    "Infrakeys best steel manufacturers in Faridabad, Haryana, providing high-quality Steel supplier, fabricators,TMT,PEB manufacturers in India at best price.",
  author: "",
  publisher: "",
};
export default function Page() {
  return (
    <>
      <meta
        name="google-site-verification"
        content="kWcwy0Kag9MmpnCSMcrOL7VuQT5ZKjuBbZ6218QCpZw"
      />

      <meta
        property="og:title"
        content="Best steel manufacturers in faridabad,Haryana"
      />
      {/* <meta property="og:site_name" content="Dr. Dipti's Smile Suite" />
      <meta property="og:url" content="https://drdiptismilesuite.com" /> */}
      <meta
        property="og:description"
        content="Infrakeys best steel manufacturers in Faridabad, Haryana, providing high-quality Steel supplier, fabricators,TMT,PEB manufacturers in India at best price."
      />
      <meta property="og:type" content="business.business" />
      {/* <meta
        property="og:image"
        content="https://drdiptismilesuite.com/img/logo-nobg.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@drdiptismilesuite" />
      <meta
        name="twitter:title"
        content="Dr. Dipti Smile Suite | Faridabad Dentist | Dental Care"
      />
      <meta
        name="twitter:description"
        content="Visit Dr. Dipti Smile Suite, your trusted Faridabad dentist, for top-quality personalized dental care. Our expert team ensures your smile shines bright with tailored treatments."
      />
      <meta
        name="twitter:image"
        content="https://drdiptismilesuite.com/img/logo-nobg.png"
      /> */}

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
      <Script>
        {`function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WN9SB6DD');`}
      </Script>
      {/* <!-- End Google Tag Manager --> */}
      <Hero />
      <CategoriesHome />
      {/* Google Tag Manager (noscript)  */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WN9SB6DD"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript)  */}
    </>
  );
}
