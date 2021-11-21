
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    await deploy("BShare", {
        from: deployer,
        args: [1638334800, dev, dev],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["BShare"];