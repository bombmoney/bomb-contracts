
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    const tomb = await ethers.getContract("Tomb");

    await deploy("TombRewardPool", {
        from: deployer,
        args: [tomb.address, 1637296903],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["TombRewardPool"];
module.exports.dependencies = ["Tomb"];
