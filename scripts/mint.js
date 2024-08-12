const hre = require("hardhat");
const utils = require("../utils/utils.js")

async function main() {
  const contractAddress = "0xa06173F7c736F6d91bF00180b03cD8bE84D66193";
  const [signer] = await hre.ethers.getSigners();

  const contractFactory = await hre.ethers.getContractFactory("SwisstronikPrivateErc721");
  const contract = contractFactory.attach(contractAddress);

  const mint = await utils.sendShieldedTransaction(
    signer,
    contractAddress,
    contract.interface.encodeFunctionData("safeMint",[signer.address,"123456"]),
    0
  );

  await mint.wait();

  console.log("Transaction Receipt: ", mint.hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});