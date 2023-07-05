require("@shardlabs/starknet-hardhat-plugin");
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  starknet: {
    network: "myNetwork"

  },
  networks: {
    "imyNetwork":{
      dockerizedVersion: "0.8.1",
      // venv: "<VENV_PATH>",
      // cairo1BinDir: "path/to/compiler/target/release/",
      url: "https://alpha4.starknet.io",
    }
  }
};
