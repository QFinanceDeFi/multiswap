const HDWalletProvider = require('@truffle/hdwallet-provider');
const { mnemonic, projectId, etherscanApi, address } = require('./secrets.json');

module.exports = {
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 1,
    },
    kovan: {
      provider: new HDWalletProvider(mnemonic, `https://kovan.infura.io/v3/${projectId}`),
      port: 443,
      network_id: "*",
      gas: 10000000
    },
    mainnet: {
      provider: new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${projectId}`),
      port: 443,
      network_id: "1",
      from: address,
      gas: 5200000,
      gasPrice: 100000000000
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: etherscanApi
  },
  mocha: {
  },
  compilers: {
    solc: {
      version: "0.8.7",
        optimizer: {
          enabled: true,
          runs: 200
        },
    }
  },
  db: {
    enabled: false
  }
};
