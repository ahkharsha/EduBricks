import realEstate from "./RealEstate.json";
require("dotenv").config();

export const REAL_ESTATE_ADDRESS = "0x12Ec108BcE5Be2C0E10DAe06B122089cf2dd551f";
export const REAL_ESTATE_ABI = realEstate.abi;

export const PINATA_API_KEY = "6913532cb8a350b6dbb3";
export const PINATA_SECRET_KEY = "0c93e6871fd49b760c5aa1461e5fb4c86e6bd3e6bdf61c3220efdc0aee4020b4";

// NETWORK
const networks = {
  localhost: {
    chainId: `0x${Number(31337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "EDU",
      symbol: "EDU",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.open-campus-codex.gelato.digital"],
    blockExplorerUrls: ["https://opencampus-codex.blockscout.com"],
  },
  open_campus_codex: {
    chainId: `0x${Number(656476).toString(16)}`,
    chainName: "Open Campus Codex",
    nativeCurrency: {
      name: "EDU",
      symbol: "EDU",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.open-campus-codex.gelato.digital"],
    blockExplorerUrls: ["https://opencampus-codex.blockscout.com"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const ACTIVE_NETWORK = "open_campus_codex";

export const handleNetworkSwitch = async () => {
  const networkName = "open_campus_codex";
  const network = await changeNetwork({ networkName });
  return networkName;
};
