
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
    pairAddress = "0x84392649eb0bC1c1532F2180E58Bae4E1dAbd8D6";

    await deploy("Oracle", {
        from: deployer,
        args: [pairAddress, 21600, 1637306946],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["Oracle"];