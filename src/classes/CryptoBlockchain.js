const CryptoBlock = require("./CryptoBlock");

class CryptoBlockchain {
  constructor() {
    this.blockchain = [this.startGenesisBlock()];
  }

  startGenesisBlock() {
    return new CryptoBlock(0, "08/01/2023", "Initial Block in the Chain");
  }

  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  addNewBlock(newBlock) {
    newBlock.precedingHash = this.obtainLatestBlock().hash;
    newBlock.hash = newBlock.computeHash();
    if (this.checkChainValidity()) {
      this.blockchain.push(newBlock);
    } else {
      console.error("Problem detected in chain validity...");
    }
  }

  checkChainValidity() {
    if (this.blockchain.length === 1) return true;
    for (let i = 1; i <= this.blockchain.length; i++) {
      const currentBlock = this.blockchain[i];
      const precedingBlock = this.blockchain[i - 1];
      return Boolean(
        currentBlock.hash === currentBlock.computeHash() &&
          currentBlock.precedingHash === precedingBlock.hash
      );
    }
  }
}

module.exports = CryptoBlockchain;
