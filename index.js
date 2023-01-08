/* eslint-disable no-console */
const CryptoBlock = require("./src/classes/CryptoBlock");
const CryptoBlockchain = require("./src/classes/CryptoBlockchain");

let myBlockchain = new CryptoBlockchain();

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

console.log(JSON.stringify(myBlockchain, null, 4));
