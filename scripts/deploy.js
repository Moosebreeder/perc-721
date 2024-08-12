const { ethers } = require("hardhat");

async function main() {
  const contract = await ethers.deployContract("SwisstronikPrivateErc721");
  await contract.waitForDeployment();

  console.log(`SwisstronikPrivateErc721 was deployed to ${await contract.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

