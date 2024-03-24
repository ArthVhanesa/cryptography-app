import { useState } from "react";
import scrypt from "@/utils/Scrypt";
import toast from "react-hot-toast";
import { FaRegCopy } from "react-icons/fa";

function ScryptHash() {
  const [formData, setFormData] = useState({
    password: "",
    salt: "",
    keyLength: 32,
    cost: 16384,
    blockSize: 8,
    parallelization: 1,
  });
  const [hashedValue, setHashedValue] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isPowerOf2 = (n) => {
    var log = Math.log(n) / Math.log(2);
    var isInteger = parseInt(log) == log;
    return isInteger;
  };

  const handleHash = async () => {
    if (isPowerOf2(formData.cost) === false) {
      toast.error("Cost must be a power of 2");
      return;
    }
    try {
      const hash = await scrypt.hash(
        formData.password,
        formData.salt,
        formData.keyLength,
        formData.cost,
        formData.blockSize,
        formData.parallelization
      );
      setHashedValue(hash);
    } catch (error) {
      toast.error("Error occurred while hashing");
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
        toast.error("Failed to copy text to clipboard:");
      });
  };

  return (
    <>
      <div>{/* <Toaster /> */}</div>
      <div className="w-full max-w-sm mt-2">
        <div className="label">
          <span className="label-text">Enter password</span>
        </div>
        <textarea
          placeholder="Add your text here"
          className="textarea textarea-bordered w-full max-w-sm"
          name="password"
          value={formData.password}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="w-full max-w-sm mb-2">
        <div className="label">
          <span className="label-text">Salt</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-sm"
          name="salt"
          value={formData.salt}
          onChange={handleChange}
        />
      </div>
      <div className="w-full max-w-sm flex flex-row items-center justify-between">
        <div className="w-full max-w-[11rem] mb-2 mr-2">
          <div className="label">
            <span className="label-text">Key length</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="keyLength"
            value={formData.keyLength}
            onChange={handleChange}
          />
        </div>
        <div className="w-full max-w-[11rem] mb-2 ml-2">
          <div className="label">
            <span className="label-text">Cost</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="w-full max-w-sm flex flex-row items-center justify-between">
        <div className="w-full max-w-[11rem] mb-2 mr-2">
          <div className="label">
            <span className="label-text">Block size</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="blockSize"
            value={formData.blockSize}
            onChange={handleChange}
          />
        </div>
        <div className="w-full max-w-[11rem] mb-2 ml-2">
          <div className="label">
            <span className="label-text">Parallelization</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="parallelization"
            value={formData.parallelization}
            onChange={handleChange}
          />
        </div>
      </div>

      <button
        className="btn btn-primary  w-full max-w-xs m-2"
        onClick={handleHash}
      >
        Generate hash
      </button>

      {hashedValue && (
        <div className="flex flex-row w-auto m-7 p-3 rounded-xl justify-between items-center bg-[#f2f2f2]">
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

export default ScryptHash;
