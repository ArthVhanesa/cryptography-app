import { useState } from "react";
import scrypt from "@/utils/Scrypt";
import toast from "react-hot-toast";

function ScryptCompare() {
  const [formData, setFormData] = useState({
    password: "",
    salt: "",
    hash: "",
    keyLength: 32,
    cost: 16384,
    blockSize: 8,
    parallelization: 1,
  });
  const [isCompared, setIsCompared] = useState(null);

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

  const handleCompare = async () => {
    if (isPowerOf2(formData.cost) === false) {
      toast.error("Cost must be a power of 2");
      return;
    }

    try {
      const compare = await scrypt.compare(
        formData.hash,
        formData.password,
        formData.salt,
        formData.keyLength,
        formData.cost,
        formData.blockSize,
        formData.parallelization
      );
      setIsCompared(compare);
    } catch (error) {
      setIsCompared("Error occurred while comparing.");
    }
  };

  return (
    <div className="w-full m-4">
      <div className="w-full max-w-sm mt-2">
        <div className="label">
          <span className="label-text">Hash</span>
        </div>
        <textarea
          placeholder="Add your text here"
          className="textarea textarea-bordered w-full max-w-sm"
          name="hash"
          value={formData.hash}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="w-full max-w-sm">
        <div className="label">
          <span className="label-text">Enter password</span>
        </div>
        <input
          type="text"
          placeholder="Add your text here"
          className="textarea textarea-bordered w-full max-w-sm"
          name="password"
          value={formData.password}
          onChange={handleChange}
        ></input>
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
        <div className="w-full max-w-[11rem] mb-2">
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
        <div className="w-full max-w-[11rem] mb-2">
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
        <div className="w-full max-w-[11rem] mb-2">
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
        <div className="w-full max-w-[11rem] mb-2">
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
        className="btn btn-primary w-full max-w-xs m-2"
        onClick={handleCompare}
      >
        Compare
      </button>

      {isCompared !== null && (
        <div
          className={`alert w-full max-w-xs ${
            isCompared === true ? "alert-success" : "alert-error"
          }`}
        >
          {isCompared === true ? "Hash matched." : "Hash does not match!"}
        </div>
      )}
    </div>
  );
}

export default ScryptCompare;
