const CryptoBlock = require("./src/classes/CryptoBlock");
const CryptoBlockchain = require("./src/classes/CryptoBlockchain");

const DIFFICULTY_LEVEL = 4;

const myBlockchain = new CryptoBlockchain(DIFFICULTY_LEVEL);

console.log("Mining in progress...");

myBlockchain.addNewBlock(
  new CryptoBlock(1, "09/01/2023", {
    sender: "John",
    recipient: "Mike",
    value: 50,
  })
);

myBlockchain.addNewBlock(
  new CryptoBlock(2, "10/01/2023", {
    sender: "Mike",
    recipient: "Elsa",
    value: 100,
  })
);

myBlockchain.addNewBlock(
  new CryptoBlock(3, "11/01/2023", {
    sender: "Elsa",
    recipient: "John",
    value: 75,
  })
);

console.log(JSON.stringify(myBlockchain, null, 4));
