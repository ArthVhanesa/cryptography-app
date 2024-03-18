import { useState } from "react";
import bcrypt from "@/utils/Bcrypt";

function BcryptCompare() {
  const [formData, setFormData] = useState({
    password: "",
    hash: "",
  });
  const [isCompared, setIsCompared] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCompare = async () => {
    try {
      const compare = await bcrypt.compare(formData.password, formData.hash);
      setIsCompared(compare);
    } catch (error) {
      setIsCompared("Error occurred while comparing.");
    }
  };

  return (
    <>
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

      <div className="w-full max-w-xs">
        <div className="label">
          <span className="label-text">Hash</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs mb-2"
          name="hash"
          value={formData.hash}
          onChange={handleChange}
        />
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
    </>
  );
}

export default BcryptCompare;
