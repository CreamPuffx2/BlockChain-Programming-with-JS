const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = 'A49F60628DE93E45DE06213D084A4B210E8CBB57126ACEE98718A04BB6B09A6E';
const currentBlockData = [
  {
    amount: 10,
    sender: '89BCF68A763D11F28341B3847B7C79F1DCA13D34F1F344184562F059D49DF216',
    recipient: 'DEA42E88C1FC84536F62F5F6FE7B572CE09D479804DE3AFD7C4AB4C9B8BFF2F9',
  },
  {
    amount: 90,
    sender: 'DEA42E88C1FC84536F62F5F6FE7B572CE09D479804DE3AFD7C4AB4C9B8BFF2F9',
    recipient: '89BCF68A763D11F28341B3847B7C79F1DCA13D34F1F344184562F059D49DF216',
  },
  {
    amount: 20,
    sender: '89BCF68A763D11F28341B3847B7C79F1DCA13D34F1F344184562F059D49DF216',
    recipient: 'EA42E88C1FC84536F62F5F6FE7B572CE09D479804DE3AFD7C4AB4C9B8BFF2F9',
  },
];
const nonce = 100;

let result = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

console.log(result);
// console.log(bitcoin.chain[bitcoin.chain.length - 1]);
