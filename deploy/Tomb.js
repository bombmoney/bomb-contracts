
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    await deploy("Tomb", {
        from: deployer,
        args: [1000, dev],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["Tomb"];