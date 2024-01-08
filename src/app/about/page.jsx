import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <>
      <title>Infrakeys | About</title>
      <meta name="title" content="Infrakeys | About" />
      <meta name="og:title" content="Infrakeys | About" />
      <meta
        name="keywords"
        content="Structural Steel Supplier in Haryana,Scaffolding manufacturers,Industrial Steel in faridabad ,Quality building products,Marble and granite supplier ,Roofing materials "
      />
      <meta
        name="description"
        content="Infrakeys, we are dedicated to transforming the way you source construction materials for the infrastructure sector. Infrakeys is more than just a marketplace;"
      />
      <meta
        name="og:description"
        content="Infrakeys, we are dedicated to transforming the way you source construction materials for the infrastructure sector. Infrakeys is more than just a marketplace;"
      />
      <meta property="og:site_name" content="Infrakeys" />
      <meta property="og:type" content="business" />
      <meta
        property="og:image"
        content="https://www.infrakeys.com/_next/image?url=%2Flogo.png&w=256&q=75"
      />
      <meta property="og:url" content="https://www.infrakeys.com/about" />

      <link rel="canonical" href="https://www.infrakeys.com/about" />

      <section className="plainSection">
        <div className="container-fluid about-container">
          <div className="aboutBanner">
            {/* <Image/> */}
            <div className="img-container">
              <h1>About Us</h1>
            </div>
          </div>

          <div className="aboutContent">
            <p>
              At Infrakeys, we are dedicated to transforming the way you source
              construction materials for the infrastructure sector. Infrakeys is
              more than just a marketplace; it's a comprehensive solution
              designed to streamline your procurement process and enhance your
              project efficiency. Our platform offers a wide range of
              construction material categories to meet your diverse needs,
              including:
            </p>
            <ul>
              <li>
                HR(hot rolled ) all special grades up to 550 mpa thickness 1.6
                to 32 mm authorised dealer of Tata steel
              </li>
              <li>GC Sheets/Color Corrugated sheets</li>
              <li>GL (Galvalume) AZ150 550 mpa 0.47mm thick</li>
              <li>PPGL (Pre Painted Galvalume) AZ150 550 mpa 0.50mm thick.</li>
              <li>
                GPSP 120 gsm, oily & non-Oily huge stock available, make –POSCO.
              </li>
              <li>GP(galvanized plain) up to 275 gsm & upto 345 mpa</li>
              <li>
                Steel Raw Material (Structural steel Flats and Long Products)
              </li>
              <li>Scaffolding Materials</li>
              <li>Nails and Hardware</li>
              <li>Safety Equipment</li>
              <li>Wire Mesh</li>
              <li>Building Materials</li>
            </ul>
            <p>
              We Operate in Mumbai, Hyderabad, Raipur, Kolkata, Ahmedabad,
              Bangalore and Delhi NCR with manufacturing units in Faridabad and
              Raipur. What sets Infrakeys apart is our commitment to providing
              you direct access to trusted vendors. This direct connection
              ensures competitive prices in the market, allowing you to optimise
              your budget while maintaining the highest quality standards.
              Additionally, we understand the importance of financial
              flexibility in your projects. That's why Infrakeys offers channel
              financing options to make your procurement process even smoother.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
