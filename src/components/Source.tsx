import React from "react";
import { useState } from "react";

function Source() {
  const [contractBytecode, setContractBytecode] = useState("");
  const [encodedFunctionData, setEncodedFunctionData] = useState("");
  const chainOptions = [
    { value: "bitcoin", label: "Select chain" },
    { value: "alfajores", label: "Alfajores", logo: "alfajores.png" },
    { value: "fuji", label: "Fuji", logo: "fuji.png" },
    { value: "mumbai", label: "Mumbai", logo: "mumbai.png" },
    { value: "bsctestnet", label: "Bsctestnet", logo: "bsctestnet.png" },
    { value: "goerli", label: "Goerli", logo: "goerli.png" },
    {
      value: "moonbasealpha",
      label: "Moonbasealpha",
      logo: "moonbasealpha.png",
    },
    {
      value: "optimismgoerli",
      label: "Optimismgoerli",
      logo: "optimismgoerli.png",
    },
    {
      value: "arbitrumgoerli",
      label: "Arbitrumgoerli",
      logo: "arbitrumgoerli.png",
    },
    { value: "sepolia", label: "Sepolia", logo: "sepolia.png" },
    // Add more blockchain options as needed
  ];

  return (
    <div className="card">
      <div className="card-header">
        <h2>Source Chain</h2>
        <div className="dropdown">
          <select>
            {chainOptions.map((option, index) => (
              <option key={index} value={option.value} data-logo={option.logo}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="input-field">
        <label htmlFor="encodedFunctionData">Encoded Function Data</label>
        <textarea
          value={encodedFunctionData}
          onChange={(e) => setEncodedFunctionData(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="contractBytecode">Contract Bytecode</label>
        <textarea
          value={contractBytecode}
          onChange={(e) => setContractBytecode(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Source;
