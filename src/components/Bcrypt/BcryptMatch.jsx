import { useState } from "react";
import bcrypt from "@/utils/Bcrypt";
import { Toaster, toast } from "react-hot-toast";

function BcryptMatch() {
  const [formData, setFormData] = useState({
    password: "",
    hash: "",
  });
  const [isMatched, setIsMatched] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMatch = async () => {
    try {
      const match = await bcrypt.decrypt(formData.password, formData.hash);
      setIsMatched(match);
      console.log("Matched:", match);
    } catch (error) {
      console.error("Error occurred while matching:", error);
      setIsMatched("Error occurred while matching");
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
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
        onClick={handleMatch}
      >
        Match
      </button>

      {isMatched !== null && (
        <div
          className={`alert w-full max-w-xs ${
            isMatched === true ? "alert-success" : "alert-error"
          }`}
        >
          {isMatched === true ? "Hash matched." : "Hash does not match!"}
        </div>
      )}
    </>
  );
}

export default BcryptMatch;
