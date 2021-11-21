
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    const bomb = await ethers.getContract("Bomb");

    await deploy("BombGenesisRewardPool", {
        from: deployer,
        args: [bomb.address, "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", 1637449200],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["BombGenesisRewardPool"];
//module.exports.dependencies = ["Bomb"];
