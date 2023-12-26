const tokenAddress = "";

async function main() {
  try {
    console.log("\nEtherscan verification in progress...");
    await run("verify:verify", {
      address: tokenAddress,
      //constructorArguments: [],
      contract: "contracts/Token.sol:Token"
    });
    console.log("Etherscan verification done. ✅");
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });