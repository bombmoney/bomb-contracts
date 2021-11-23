
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    //  const bomb = await ethers.getContract("Bomb");
    //  testnet
    //const btcAddress = "0x8BaBbB98678facC7342735486C851ABD7A0d17Ca";
    // mainnet
    const bombAddress = "0x522348779DCb2911539e76A1042aA922F9C47Ee3"

    //testnet 
    //const pairAddress = "0x742957Dd7b4D4bB7177CF63B61Fd5f0f050Ebaa4";
    //mainnet
    //   pairAddress = "0x84392649eb0bC1c1532F2180E58Bae4E1dAbd8D6"

    await deploy("TaxOffice", {
        from: deployer,
        args: [bombAddress],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["TaxOffice"];