require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/0nqTdMmIDRIgxAVySrG4k8ULaGUpTmQE',
      accounts: ['334cb67a3df1d96132067af0e75aa38fa4b5873885b67b21bd5eb5549e53e1dd']
    }
  }
};
