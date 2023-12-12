import React from "react";
import LeftHeading from "./LeftHeading";
import Link from "next/link";

export default function AboutHome() {
  return (
    <>
      <div className="aboutHome">
        <LeftHeading heading="About Us" />
        {/* mhsv */}
        <p>
          At Infrakeys, we are dedicated to transforming the way you source
          construction materials for the infrastructure sector. Infrakeys is
          more than just a marketplace; it's a comprehensive solution designed
          to streamline your procurement process and enhance your project
          efficiency. Our platform offers a wide range of construction material
          categories to meet your diverse needs...
        </p>

        <Link href={"/about"} className="viewMore">
          View more
        </Link>
      </div>
    </>
  );
}
