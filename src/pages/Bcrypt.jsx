import { React, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import PageHeader from "@/components/PageHeader";
import BcryptHash from "@/components/Bcrypt/BcryptHash";
import BcryptMatch from "@/components/Bcrypt/BcryptMatch";

function Bcrypt() {
  const [activeTab, setActiveTab] = useState("Encrypt");

  const handleTabClick = async (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <div>
        <Toaster />
      </div>
      <PageHeader title="Bcrypt" description="" />
      <div className="flex flex-col justify-center items-center my-4">
        <div className="w-full max-w-xs">
          <div role="tablist" className="tabs tabs-boxed">
            <a
              role="tab"
              className={`tab ${
                activeTab === "Encrypt" ? "tab-active bg-black" : ""
              }`}
              onClick={() => handleTabClick("Encrypt")}
            >
              Encrypt
            </a>
            <a
              role="tab"
              className={`tab ${activeTab === "Decrypt" ? "tab-active" : ""}`}
              onClick={() => handleTabClick("Decrypt")}
            >
              Decrypt
            </a>
          </div>
        </div>
        {activeTab === "Encrypt" ? <BcryptHash /> : <BcryptMatch />}
      </div>
    </>
  );
}

export default Bcrypt;
