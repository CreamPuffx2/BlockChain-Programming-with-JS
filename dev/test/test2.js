const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock();

const previousBlockHash = '87765DA6CCF0668238C1D27C35692E11'
const currentBlockData = [
  {
    amount: 10,
    sender: 'B4CEE9C0E5CD571',
    recipient: '3A3F5E452D48E9',
  },
  {
    amount: 101,
    sender: '3A3F5E452D48E9',
    recipient: 'B4CEE9C0E5CD571',
  },
  {
    amount: 1000,
    sender: 'B4CEE9C0E5CD571',
    recipient: '3A3F5E452D48E9',
  },
]
const nonce = 100;

const hash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

console.log(hash);

