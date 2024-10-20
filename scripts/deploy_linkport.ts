import { ethers } from "hardhat";

async function main() {
  const router = "0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0";

  const adapterFactory = await ethers.getContractFactory("LinkPort");

  const adapter = await adapterFactory.deploy(router);

  await adapter.waitForDeployment();

  console.log("Contract deployed to:", await adapter.getAddress());
}

main();
