import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import ScryptHash from "@/components/Scrypt/ScryptHash";
import ScryptCompare from "@/components/Scrypt/ScryptCompare";

function ScryptPage() {
  const [activeTab, setActiveTab] = useState("Hash");

  const handleTabClick = async (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <PageHeader name="Scrypt" />
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
        <div className="w-full flex flex-col justify-center items-center px-4">
          {activeTab === "Hash" ? <ScryptHash /> : <ScryptCompare />}
        </div>
      </div>
    </>
  );
}

export default ScryptPage;
