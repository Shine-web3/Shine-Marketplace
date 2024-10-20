import { ethers } from "hardhat";

async function main() {
  const router = "";

  const factory = await ethers.getContractFactory("ShineNFT");

  const contract = await factory.deploy();

  await contract.waitForDeployment();

  console.log("Contract deployed to:", await contract.getAddress());
}

main();
