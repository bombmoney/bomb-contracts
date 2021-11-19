
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    await deploy("TShare", {
        from: deployer,
        args: [1637279626, dev, dev],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["TShare"];