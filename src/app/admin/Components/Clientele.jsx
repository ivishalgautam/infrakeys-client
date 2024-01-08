"use client";
import CenterHeading from "@/components/CenterHeading";

export default function Clientele() {
  return (
    <section className="plainSection">
      <CenterHeading heading="Our Clientele" />
      <div className="container-fluid mt-4">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 justify-content-center">
          {[
            "/Ahulwalia_Contracts.png",
            "/indianoil_logo.png",
            "/Interarch_logo.png",
            "/KALPATPOWR.NS_logo.png",
            "/Kirby.png",
            "/L&T.png",
            "/Navayuga.png",
            "/NCRTC_LOGO.png",
            "/Shapoorji_Pallonji.png",
            "/Tata_Projects_Logo.png",
          ].map((item, key) => (
            <div className="col" key={key}>
              <img
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
