import { useState } from "react";
// import { BiTransferAlt } from "react-icons/bi";
import { ethers } from "ethers";
import MessageRouter from "../artifacts/contracts/MessageRouter.sol/MessageRouter.json";

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
  ];

  const sendMessage = async () => {
    try {
      const { ethereum } = window;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const MessageRouterContract = new ethers.Contract(
        MessageRouter.address,
        MessageRouter.abi,
        signer
      );

      const byteCode = "0x" + contractBytecode; // Ensure it's in hexadecimal format
      const valueInFinney = 20; // 10 Finney
      const valueInWei = ethers.utils.parseUnits(
        valueInFinney.toString(),
        "finney"
      );

      // Call the sendMessage function
      const transaction = await MessageRouterContract.sendMessage(
        byteCode,
        encodedFunctionData,
        { value: valueInWei } // You may adjust the value as needed
      );

      // Wait for the transaction to be mined
      await transaction.wait();

      console.log("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // ... Rest of your component code ...

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
      {/* <BiTransferAlt className="transfer-icon" /> */}
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
      <button onClick={sendMessage}>Send Message</button>{" "}
      {/* Add a button to trigger the sendMessage function */}
    </div>
  );
}

export default Source;
