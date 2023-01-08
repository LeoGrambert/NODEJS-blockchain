/* eslint-disable no-console */
const CryptoBlock = require("./src/classes/CryptoBlock");

const MyCryptoBlock = new CryptoBlock(0, new Date().getTime(), {});

console.log(MyCryptoBlock);
