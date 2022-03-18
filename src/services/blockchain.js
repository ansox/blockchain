import sha256 from 'sha256';

class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.proofOfWork = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return sha256(
      this.index + this.timestamp + this.data + this.previousHash + this.proofOfWork
    );
  }

  mine(difficulty) {
    while (!this.hash.startsWith('0'.repeat(difficulty))) {
      this.proofOfWork += 1;
      this.hash = this.calculateHash();
    }
  }
}

const createGenesisBlock = () => {
  return new Block(0, Date.now(), 'Genesis Block');
}

const nextBlock = (lastBlock, data) => {
  const block = new Block(lastBlock.index + 1, Date.now(), data, lastBlock.hash);
  block.mine(2);
  return block;
}

export const addBlock = (blockchain, data) => {
  const block = nextBlock(blockchain[blockchain.length - 1], data);
  blockchain.push(block);
  return [...blockchain];
}

const createBlockChain = (num) => {
  const blockchain = [createGenesisBlock()];
 
  let previousBlock = blockchain[0];

  for (let i = 1; i < num; i++) {
    const block = nextBlock(previousBlock, `Block ${i}`);
    blockchain.push(block);
    previousBlock = block;
  }

  return blockchain;
}

export const isBlockchainValid = (blockchain) => {
  for (let i = 1; i < blockchain.length; i++) {
    const currentBlock = blockchain[i];
    const previousBlock = blockchain[i - 1];

    if (currentBlock.hash !== currentBlock.calculateHash()) {
      return false;
    }

    if (currentBlock.previousHash !== previousBlock.hash) {
      return false;
    }
  }
  return true;
}

export default createBlockChain;
 