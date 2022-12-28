// add the game address here and update the contract name if necessary
const gameAddr = "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1";
const contractName = "Game5";

// Game 2
//   let tx = await game.setX(25);
//   await tx.wait();
//   tx = await game.setY(25);
//   await tx.wait();
//   tx = await game.win();

// Game 3
//   let tx = await game.win(45);

// Game 4
//   let tx = await game.win(56);

// Game 5
//   let tx = await game.giveMeAllowance(10000);
//   await tx.wait();
//   tx = await game.mint(10000);
//   await tx.wait();
//   tx = await game.win();

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    // let tx = await game.setX(25);
    // await tx.wait();
    let tx = await game.giveMeAllowance(10000);
    await tx.wait();
    tx = await game.mint(10000);
    await tx.wait();
    tx = await game.win();

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt.events.some(e => e.event === "Winner"));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
