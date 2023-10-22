import { useState } from "react";
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

  const [isSending, setIsSending] = useState(false); // State to track if the operation is in progress

  const sendMessage = async () => {
    try {
      setIsSending(true); // Set the sending state to true

      const { ethereum } = window;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const MessageRouterContract = new ethers.Contract(
        MessageRouter.address,
        MessageRouter.abi,
        signer
      );

      const byteCode = "0x" + contractBytecode;
      const valueInFinney = 20;
      const valueInWei = ethers.utils.parseUnits(
        valueInFinney.toString(),
        "finney"
      );

      const transaction = await MessageRouterContract.sendMessage(
        byteCode,
        encodedFunctionData,
        { value: valueInWei }
      );

      await transaction.wait();

      console.log("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSending(false); // Reset the sending state to false when done
    }
  };

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

      <button
        className="centered-button"
        onClick={sendMessage}
        disabled={isSending}
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>
    </div>
  );
}

export default Source;
