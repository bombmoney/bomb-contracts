
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    const tomb = await ethers.getContract("Tomb");


    
    const pairAddress = "0xAbCCcecF9f24Af6d11470Ab36eF20004f3c9fbf1";

    await deploy("Oracle", {
        from: deployer,
        args: [pairAddress, 600, 1637280803],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["Oracle"];