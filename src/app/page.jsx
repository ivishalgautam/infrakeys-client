import Blogs from "@/components/Blogs";
import CategoriesHome from "@/components/CategoriesHome";
import Hero from "@/components/Hero";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import Clientele from "./admin/Components/Clientele";

export const metadata = {
  title: "Best steel manufacturers in faridabad,Haryana-Infrakeys",
  keywords:
    "steel manufacturers in faridabad,steel fabricators nera me,industrial steel in faridabad,Steel supplier in India,scaffolding manufacturer in faridabad,TMT suppliers in faridabad,PEB manufacturers in India, PEB manufacturers in faridabad,steel supplier in faridabad,top steel manufacturers in faridabad,india,steel fabricators faridabad,steel manufacturers near me",
  description:
    "Infrakeys best steel manufacturers in Faridabad, Haryana, providing high-quality Steel supplier, fabricators,TMT,PEB manufacturers in India at best price.",
  author: "Infrakeys",
  publisher: "Infrakeys",
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
        content="Best steel manufacturers in faridabad,Haryana-Infrakeys"
      />
      <meta property="og:site_name" content="Infrakeys" />
      <meta property="og:url" content="https://www.infrakeys.com/" />
      <link rel="canonical" href="https://www.infrakeys.com/" />
      <meta
        property="og:description"
        content="Infrakeys best steel manufacturers in Faridabad, Haryana, providing high-quality Steel supplier, fabricators,TMT,PEB manufacturers in India at best price."
      />
      <meta property="og:type" content="business" />
      <meta
        property="og:image"
        content="https://www.infrakeys.com/_next/image?url=%2Flogo.png&w=256&q=75"
      />
      {/*
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

      <Script type="application/ld+json">
        {`
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Infrakeys",
  "image": "https://www.infrakeys.com/_next/image?url=%2Flogo.png&w=256&q=75",
  "@id": "",
  "url": "https://www.infrakeys.com/",
  "telephone": "+91 8130376622",
  "priceRange": "₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "519-521, 5th floor, The Business Hub, Sector-81",
    "addressLocality": "Greater Faridabad",
    "postalCode": "121007",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.4373388,
    "longitude": 77.0996702
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "10:00",
    "closes": "06:30"
  },
  "sameAs": [
    "",
    "",
    ""
  ] `}
      </Script>

      <Hero />
      <CategoriesHome />
      <Blogs />
      {/* <Clientele /> */}

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
