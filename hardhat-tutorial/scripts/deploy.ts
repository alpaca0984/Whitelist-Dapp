import { ethers } from "hardhat";

async function main() {
  const whitelistContract = await ethers.getContractFactory("Whitelist");

  const deployedWhitelistContract = await whitelistContract.deploy(10);

  await deployedWhitelistContract.deployed();

  // Address: 0x05c1c63233883740Ad8Ee4255C188BAc8Cf60164
  console.log(
    "Whitelist Contract Address:",
    deployedWhitelistContract.address
  );
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
