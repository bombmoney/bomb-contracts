
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    const bshare = await ethers.getContract("BShare");

    await deploy("BShareRewardPool", {
        from: deployer,
        args: [bshare.address, 1637881200], // 6 days after genesis
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["BShareRewardPool"];
// module.exports.dependencies = ["BShare"];
