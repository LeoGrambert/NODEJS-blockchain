const CryptoBlock = require("./CryptoBlock");

class CryptoBlockchain {
  constructor() {
    this.blockchain = [this.startGenesisBlock()];
  }

  startGenesisBlock() {
    return new CryptoBlock(0, "08/01/2023", "Initial Block in the Chain", "0");
  }

  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  addNewBlock(newBlock) {
    newBlock.precedingHash = this.obtainLatestBlock().hash;
    newBlock.hash = newBlock.computeHash();
    this.blockchain.push(newBlock);
  }
}

module.exports = CryptoBlockchain;
