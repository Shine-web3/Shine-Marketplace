import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.25",

  networks: {
    kuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [process.env.DEPLOYER_PRIVATE_KEY!],
    },
    avashine: {
      url: "https://node.l1marketplace.com/ext/bc/krSHupiupKZmmfpSZgZ1bW37vvGXx67nvUkBqvyrUCmm6Xh4C/rpc",
      accounts: [process.env.DEPLOYER_PRIVATE_KEY!],
    },
  },
};

export default config;
