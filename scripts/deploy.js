// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const starknet = require("hardhat").starknet;
const PRIVATE_KEY = "0x35431cc164b7174e5daf4305a6cd39a9d2932c053f0f98a5cc56553be261111" 
accountAddress = "0x2ef44ba5c93dd2d16bb055d62a547af1ceab59a6ae88dac1b20eb0cbebdd1e4"

async function main() {
  const account = await starknet.OpenZeppelinAccount.getAccountFromAddress(
    accountAddress,
    PRIVATE_KEY
  );
  const contractFactory = await starknet.getContractFactory("HelloStarknet");
  // will call declare version 2 if contract is cairo 1
  const txHash = await account.declare(contractFactory);  // class declaration
  const classHash = await contractFactory.getClassHash();

  // const constructorArgs = { initial_balance: 0 };
  // const options = { maxFee: ... };
  // implicitly invokes UDC
  //const contract = await account.deploy(contractFactory, constructorArgs, options);
  const contract = await account.deploy(contractFactory);
  console.log("contract:", contract)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


//   deployTxHash: '0x3eb9d8d04b1041307d2fa866a8fdb607478ce18302842bf9e8230c5832d989d'
