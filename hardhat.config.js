require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

const PRIVATE_KEY = process.env.PRIVATE_KEY || "01234567890123456789";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const INFURA_API_KEY = process.env.INFURA_API_KEY || "";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    ropsten: {
      accounts: [PRIVATE_KEY],
      chainId: 3,
      url: "https://ropsten.infura.io/v3/" + INFURA_API_KEY,
    },
  },
  solidity: "0.8.4",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
