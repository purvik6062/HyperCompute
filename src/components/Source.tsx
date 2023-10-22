import React from "react";

function Source() {
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
      {/* Add other receiver-related content here */}
    </div>
  );
}

export default Source;
