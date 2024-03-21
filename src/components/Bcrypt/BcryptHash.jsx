import { useState } from "react";
import bcrypt from "@/utils/Bcrypt";
import toast from "react-hot-toast";
import { FaRegCopy } from "react-icons/fa";

function BcryptHash() {
  const [formData, setFormData] = useState({
    password: "",
    salt: "",
  });
  const [hashedValue, setHashedValue] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleHash = async () => {
    try {
      const hash = await bcrypt.hash(
        formData.password,
        parseInt(formData.salt, 10)
      );
      setHashedValue(hash);
    } catch (error) {
      console.error("Error occurred while hashing:", error);
      setHashedValue("Error occurred while hashing");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(hashedValue)
      .then(() => {
        toast.success("Copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy text to clipboard:", error);
      });
  };

  return (
    <>
      <div>{/* <Toaster /> */}</div>
      <div className="w-full max-w-xs mt-2">
        <div className="label">
          <span className="label-text">Enter password</span>
        </div>
        <textarea
          placeholder="Add your text here"
          className="textarea textarea-bordered w-full max-w-xs"
          name="password"
          value={formData.password}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="w-full max-w-xs mb-2">
        <div className="label">
          <span className="label-text">Salt</span>
        </div>
        <input
          type="number"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          name="salt"
          value={formData.salt}
          onChange={handleChange}
        />
      </div>

      <button
        className="btn btn-primary  w-full max-w-xs m-2"
        onClick={handleHash}
      >
        Generate hash
      </button>

      {hashedValue && (
        <div className="flex flex-row w-auto m-8 p-3 rounded-xl justify-between items-center bg-[#f2f2f2] sm:w-max-xs">
          <p className="break-all mr-1">
            <strong>Hash:</strong> {hashedValue}
          </p>
          <button
            onClick={copyToClipboard}
            className="btn p-1 px-2 btn-outline btn-sm"
          >
            <FaRegCopy />
          </button>
        </div>
      )}
    </>
  );
}

export default BcryptHash;
