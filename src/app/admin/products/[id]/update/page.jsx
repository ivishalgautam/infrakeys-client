"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineFactory, MdOutlineFeaturedPlayList } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LeftHeading from "@/components/LeftHeading";
import { publicRequest } from "@/libs/requestMethods";
import AddProductAbout from "@/app/admin/Components/update/AddProductAbout";
import AddUsedby from "@/app/admin/Components/update/AddUsedby";
import AddFeatures from "@/app/admin/Components/AddFeatures";

export default function Page({ params: { id } }) {
  const [productData, setProductData] = useState({});
  const [inputs, setInputs] = useState({
    title: "",
    about: "",
    images: [],
    sub_category_id: "",
    description: "",
    featureTitle: "",
    featureDesc: "",
    applicationText: "",
    keywords: "",
    meta_title: "",
    meta_desc: "",
  });
  console.log({ inputs });
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    (async function () {
      await publicRequest.get(`/products/${id}`).then((resp) => {
        setProductData(resp.data);
        setProductId(resp.data.id);
        console.log(resp.data);
      });
    })();
  }, [id]);
  // console.log(inputs);

  return (
    <>
      <section className="createSection">
        <div className="container-fluid">
          <LeftHeading heading="Edit Product" />
          <div className="formBox">
            <Tabs>
              <div className="row">
                <div className="col-lg-3">
                  <div className="tabLinks">
                    <TabList>
                      <Tab>
                        About Product <AiOutlineInfoCircle />
                      </Tab>
                      {/* <Tab>
                        Description <BiBookContent />
                      </Tab> */}
                      <Tab>
                        Features <MdOutlineFeaturedPlayList />
                      </Tab>
                      <Tab>
                        Used by Industries <MdOutlineFactory />
                      </Tab>
                      {/* <Tab>
                        Applications <TbBrandAppleArcade />
                      </Tab> */}
                    </TabList>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="tabContent">
                    <div className="tabForm">
                      <TabPanel className="tabEditor" id="addAbout">
                        {productId && (
                          <AddProductAbout
                            productId={productId}
                            inputs={inputs}
                            setInputs={setInputs}
                            setProductId={setProductId}
                          />
                        )}
                      </TabPanel>
                      {/* <TabPanel className="tabEditor" id="addDesc">
                        {productId && (
                          <AddDesc
                            productId={productId}
                            inputs={inputs}
                            setInputs={setInputs}
                          />
                        )}
                      </TabPanel> */}
                      <TabPanel className="tabEditor" id="features">
                        {productId && (
                          <AddFeatures
                            productId={productId}
                            inputs={inputs}
                            setInputs={setInputs}
                          />
                        )}
                      </TabPanel>
                      <TabPanel className="tabEditor" id="usedBy">
                        {productId && (
                          <AddUsedby
                            productId={productId}
                            inputs={inputs}
                            setInputs={setInputs}
                          />
                        )}
                      </TabPanel>
                      {/* <TabPanel className="tabEditor" id="applications">
                        {productId && (
                          <AddApplications
                            productId={productId}
                            inputs={inputs}
                            setInputs={setInputs}
                          />
                        )}
                      </TabPanel> */}
                    </div>
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
