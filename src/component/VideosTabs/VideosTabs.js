import React, { useState } from "react";
import "./videosTabs.css";
import M1 from "../M/M1";
import M2 from "../M/M2";
import M3 from "../M/M3";
import M4 from "../M/M4";
import M5 from "../M/M5";
import M6 from "../M/M6";
import M7 from "../M/M7";
import M8 from "../M/M8";
import M9 from "../M/M9";

const VideosTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };


  var tab1 = "ترتيب السرير";
  var tab2 = "غسيل الاسنان ";
  var tab3 = " تسريح الشعر ";
  var tab4 = " دخول الحمام ";
  var tab5 = " لبس التيشيرت و البنطلون ";
  var tab6 = " لبس الشراب و الجزمة ";
  var tab7 = " الاستحمام ";
  var tab8 = " الاكل ";
  var tab9 = " مسح الانف ";

  return (
    <div  className="VideosTabs">
      <div data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="100" className="d-tabs">
        <div className="tabs" id="myTabs">
          <div
            className={`tab ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => openTab("tab1")}
          >
            {tab1}
          </div>
          <div
            className={`tab ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => openTab("tab2")}
          >
            {tab2}
          </div>


          <div
            className={`tab ${activeTab === "tab3" ? "active" : ""}`}
            onClick={() => openTab("tab3")}
          >
            {tab3}
          </div>


          <div
            className={`tab ${activeTab === "tab4" ? "active" : ""}`}
            onClick={() => openTab("tab4")}
          >
            {tab4}
          </div>

          <div
            className={`tab ${activeTab === "tab5" ? "active" : ""}`}
            onClick={() => openTab("tab5")}
          >
            {tab5}
          </div>

          <div
            className={`tab ${activeTab === "tab6" ? "active" : ""}`}
            onClick={() => openTab("tab6")}
          >
            {tab6}
          </div>

          <div
            className={`tab ${activeTab === "tab7" ? "active" : ""}`}
            onClick={() => openTab("tab7")}
          >
            {tab7}
          </div>

          <div
            className={`tab ${activeTab === "tab8" ? "active" : ""}`}
            onClick={() => openTab("tab8")}
          >
            {tab8}
          </div>

          <div
            className={`tab ${activeTab === "tab9" ? "active" : ""}`}
            onClick={() => openTab("tab9")}
          >
            {tab9}
          </div>
        </div>
      </div>

      {/* ================================/ content /============================================ */}

      <div data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
        className={`tab-content ${activeTab === "tab1" ? "active" : ""}`}
        id="tab1Content"
      >
        <M1 tab={tab1} />
      </div>

      {/* tab 2 */}
      <div
        className={`tab-content ${activeTab === "tab2" ? "active" : ""}`}
        id="tab2Content"
      >
        <M2 tab={tab2} />
      </div>

      {/* tab 3 */}
      <div
        className={`tab-content ${activeTab === "tab3" ? "active" : ""}`}
        id="tab2Content"
      >
        <M3 tab={tab3} />
      </div>

      {/* tab 4 */}
      <div
        className={`tab-content ${activeTab === "tab4" ? "active" : ""}`}
        id="tab2Content"
      >
        <M4 tab={tab4} />
      </div>

      {/* tab 5 */}
      <div
        className={`tab-content ${activeTab === "tab5" ? "active" : ""}`}
        id="tab2Content"
      >
        <M5 tab={tab5} />
      </div>

      {/* tab 6 */}
      <div
        className={`tab-content ${activeTab === "tab6" ? "active" : ""}`}
        id="tab2Content"
      >
        <M6 tab={tab6} />
      </div>

      {/* tab 7 */}
      <div
        className={`tab-content ${activeTab === "tab7" ? "active" : ""}`}
        id="tab2Content"
      >
        <M7 tab={tab7} />
      </div>

      {/* tab 8 */}
      <div
        className={`tab-content ${activeTab === "tab8" ? "active" : ""}`}
        id="tab2Content"
      >
        <M8 tab={tab8} />
      </div>

      {/* tab 9 */}
      <div
        className={`tab-content ${activeTab === "tab9" ? "active" : ""}`}
        id="tab2Content"
      >
        <M9 tab={tab9} />
      </div>
    </div>
  );
};

export default VideosTabs;
