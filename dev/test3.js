const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = 'OINAISDFN09N09ASDNF90N90N90ASNDF';
const currentBlockData = [
  {
    amount: 100,
    sender: 'NASJDIRJF343DJFISJDf',
    recipient: 'DNFJDIRJS34$JSO098DF',
  },
  {
    amount: 30,
    sender: 'DNFJDIRJS34$JSO098DF',
    recipient: 'NASJDIRJF343DJFISJDf',
  },
  {
    amount: 20,
    sender: 'NASJDIRJF343DJFISJDf',
    recipient: 'DNFJDIRJS34$JSO098DF',
  },
];

// const result = bitcoin.proofOfWork(previousBlockHash, currentBlockData);

const nonce = 21529;
const result = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

console.log(result);