
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    const tomb = await ethers.getContract("Tomb");

    await deploy("TombGenesisRewardPool", {
        from: deployer,
        args: [tomb.address, "0x71d82eb6a5051cff99582f4cdf2ae9cd402a4882", 1637281903],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["TombGenesisRewardPool"];
module.exports.dependencies = ["Tomb"];
