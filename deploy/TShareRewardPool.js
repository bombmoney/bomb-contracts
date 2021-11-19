
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    const tshare = await ethers.getContract("TShare");

    await deploy("TShareRewardPool", {
        from: deployer,
        args: [tshare.address, 1637294903],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["TShareRewardPool"];
module.exports.dependencies = ["TShare"];
