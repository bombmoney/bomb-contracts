
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    //  const bomb = await ethers.getContract("Bomb");

    await deploy("Treasury", {
        from: deployer,
        //  args: [bomb.address, 1637284903],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["Treasury"];
//module.exports.dependencies = ["Bomb", "BShare", "BombRewardPool", "BShareRewardPool"];
