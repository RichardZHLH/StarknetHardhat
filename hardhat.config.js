require("@shardlabs/starknet-hardhat-plugin");
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  starknet: {
    network: "alphaGoerli",
    //dockerizedVersion: "0.12.0",
    venv: "/home/lzhang/cairo_venv",
    cairo1BinDir:"/home/lzhang/.cairo/target/release",
  },
  networks: {
    "bak_myNetwork":{
      //dockerizedVersion: "0.12.0",
      // venv: "<VENV_PATH>",
      // cairo1BinDir: "path/to/compiler/target/release/",
      cairo1BinDir:"/home/lzhang/.cairo/target/release",
      url: "https://alpha4.starknet.io",
    }
  }
};
