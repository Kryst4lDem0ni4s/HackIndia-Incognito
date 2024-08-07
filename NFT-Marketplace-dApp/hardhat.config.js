require("@nomiclabs/hardhat-waffle");

const PRIVATE_KEY = "5a35687b95f7acd11ec97ffc2ab5dfb186c6d1e0ca61909da21ff37ef31caa09"; // Your wallets private key

module.exports = {
  solidity: {
    version: "0.7.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      chainId: 43114,
      accounts: [PRIVATE_KEY],
    },
  },
};
