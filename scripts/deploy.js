async function main() {
  const [deployer] = await ethers.getSigners();

  const Token = await ethers.getContractFactory("Token");

  console.log("Deploying contracts with the account:", deployer.address);

  const token = await Token.deploy();
  await token.waitForDeployment();

  const tokenAddress = await token.getAddress();

  console.log(`Token address: ${tokenAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });