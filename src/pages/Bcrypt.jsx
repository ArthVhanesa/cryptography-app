import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import BcryptHash from "@/components/Bcrypt/BcryptHash";
import BcryptCompare from "@/components/Bcrypt/BcryptCompare";

function Bcrypt() {
  const [activeTab, setActiveTab] = useState("Hash");

  const handleTabClick = async (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <PageHeader name="Bcrypt" />
      <div className="flex flex-col justify-center items-center my-4">
        <div className="w-full max-w-xs">
          <div role="tablist" className="tabs tabs-boxed">
            <a
              role="tab"
              className={`tab ${
                activeTab === "Hash" ? "tab-active bg-black" : ""
              }`}
              onClick={() => handleTabClick("Hash")}
            >
              Hash
            </a>
            <a
              role="tab"
              className={`tab ${activeTab === "Compare" ? "tab-active" : ""}`}
              onClick={() => handleTabClick("Compare")}
            >
              Compare
            </a>
          </div>
        </div>
        {activeTab === "Hash" ? <BcryptHash /> : <BcryptCompare />}
      </div>
    </>
  );
}

export default Bcrypt;
