require("@nomicfoundation/hardhat-toolbox");

const endpointUrl = "https://rpc.ankr.com/eth"; //mainnet
//const endpointUrl = "https://rpc.ankr.com/eth_goerli"; //goerli
const privateKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

module.exports = {
  defaultNetwork: "eth",
  networks: {
    eth: {
      url: endpointUrl,
      accounts: [privateKey]
    }
  },
  etherscan: {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  }
};
