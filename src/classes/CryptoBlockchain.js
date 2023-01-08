const CryptoBlock = require("./CryptoBlock");
const { msToSec } = require("../helpers/convert");

class CryptoBlockchain {
  constructor(difficulty) {
    this.blockchain = [this.createFirstBlock()];
    this.difficulty = parseInt(difficulty);
  }

  createFirstBlock() {
    return new CryptoBlock(0, "08/01/2023", "Initial Block in the Chain");
  }

  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  addNewBlock(newBlock) {
    newBlock.precedingHash = this.obtainLatestBlock().hash;
    const miningTime = newBlock.proofOfWork(this.difficulty);
    if (this.checkChainValidity()) {
      newBlock["miningTime"] = msToSec(miningTime);
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
