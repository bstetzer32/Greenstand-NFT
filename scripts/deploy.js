async function main() {
  // Grab the contract factory
  const TreeNFT = await ethers.getContractFactory("TreeNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const treeNFT = await TreeNFT.deploy(); // Instance of the contract
  console.log("Contract deployed to address:", treeNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
