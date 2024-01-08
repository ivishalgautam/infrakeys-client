"use client";
import AhluwaliaContracts from "../../../assets/images/Ahulwalia_Contracts.png";
import IndianOil from "../../../assets/images/indianoil_logo.png";
import Interarch from "../../../assets/images/Interarch_logo.png";
import Kalpatpowr from "../../../assets/images/KALPATPOWR.NS_logo.png";
import Kirby from "../../../assets/images/Kirby.png";
import LT from "../../../assets/images/L&T.png";
import Navayuga from "../../../assets/images/Navayuga.png";
import Ncrtc from "../../../assets/images/NCRTC_LOGO.png";
import Shapoorji from "../../../assets/images/Shapoorji_Pallonji.png";
import Tata from "../../../assets/images/Tata_Projects_Logo.png";

import Image from "next/image";
import CenterHeading from "@/components/CenterHeading";

export default function Clientele() {
  return (
    <section className="plainSection">
      <CenterHeading heading="Our Clientele" />
      <div className="container-fluid mt-4">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 justify-content-center">
          {[
            AhluwaliaContracts,
            IndianOil,
            Interarch,
            Kalpatpowr,
            Kirby,
            LT,
            Navayuga,
            Ncrtc,
            Shapoorji,
            Tata,
          ].map((item, key) => (
            <div className="col">
              <Image
                key={key}
                src={item}
                style={{
                  background: "#fff",
                  width: "100%",
                  height: "auto",
                  backgroundPosition: "center",
                  objectFit: "contain",
                  borderRadius: "8px",
                  margin: "1rem",
                  padding: "10px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
