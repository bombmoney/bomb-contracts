
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    const bomb = await ethers.getContract("Bomb");


    //testnet
    //const pairAddress = "0x742957Dd7b4D4bB7177CF63B61Fd5f0f050Ebaa4";

    //mainnnet
    pairAddress = "0xB6E85031F313563bF12ea414118978C8BD78db5D";

    await deploy("Oracle", {
        from: deployer,
        args: [pairAddress, 21600, 1637708400],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["Oracle"];