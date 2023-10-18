"use client";
import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineFactory, MdOutlineFeaturedPlayList } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { v4 as uuidv4 } from "uuid";
import AddProductAbout from "../../Components/AddProductAbout";
import AddFeatures from "../../Components/AddFeatures";
import AddUsedby from "../../Components/AddUsedby";

export default function Page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inputs, setInputs] = useState({
    title: "",
    about: "",
    sub_category_id: "",
    description: "",
    featureTitle: "",
    featureDesc: "",
    applicationText: "",
    keywords: "",
  });
  const [productId, setProductId] = useState(null);

  return (
    <>
      <section className="createSection">
        <div className="container-fluid">
          <div className="formBox">
            <Tabs>
              <div className="row">
                <div className="col-lg-3">
                  <div className="tabLinks">
                    <TabList>
                      <Tab>
                        About Product <AiOutlineInfoCircle />
                      </Tab>
                      <Tab>
                        Features <MdOutlineFeaturedPlayList />
                      </Tab>
                      <Tab>
                        Used by Industries <MdOutlineFactory />
                      </Tab>
                    </TabList>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="tabContent">
                    <div className="tabForm">
                      <TabPanel className="tabEditor" id="addAbout">
                        <AddProductAbout
                          productId={productId}
                          inputs={inputs}
                          setInputs={setInputs}
                          setProductId={setProductId}
                        />
                      </TabPanel>
                      <TabPanel className="tabEditor" id="features">
                        <AddFeatures
                          productId={productId}
                          inputs={inputs}
                          setInputs={setInputs}
                        />
                      </TabPanel>
                      <TabPanel className="tabEditor" id="usedBy">
                        <AddUsedby
                          productId={productId}
                          inputs={inputs}
                          setInputs={setInputs}
                        />
                      </TabPanel>
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
