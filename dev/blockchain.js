const sha256 = require('sha256');

/*
class Blockchain {
  constructor() {
    this.chain = [];
    this.newTransactions = [];
  }
  // Here you can build out all of the methods
  // that we are going to write inside of this
  // Blockchain class.
}
*/

function Blockchain() {
  this.chain = [];  //  채굴한 모든 블록들을 체인으로 저장.
  this.pendingTransactions = [];  // 블록에 아직 저장되지 않은 모든 트랜잭션(미결 트랜잭션)들을 저장.
  this.createNewBlock(100, '0', '0');  // 제네시스 블록. 어떤 임의의 값도 넘길 수 있지만, createNewBlock 메서드를 통해 새로운 블록들을 생성할 때, 적법한 매개변수들을 넘겨야 한다.
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
  const newBlock = {  // 새 블록. newBlock 객체는 BlockChain 안의 새로운 블록이 된다. 즉, 모든 관련 데이터들은 이 블록 안에 저장된다.
    index: this.chain.length + 1,  // 블록 번호. newBlock이 해당 블록체인 내에서 몇 번째 블록인지 알려줌.
    timestamp: Date.now(),  // 블록이 생성된 시점.
    transactions: this.pendingTransactions,  // 새로운 블록을 만들었을 때 모든 새로운 트랜잭션들과 미결 트랜잭션들을 새로운 블록에 추가. 이를 통해 이 트랜잭션들은 블록체인 내에 보관되어 영원히 변하지 않게 됨.
    nonce: nonce,  // (number) proofOfWork 메서드를 통해 적법하게 새로운 블록을 만들었다는 증거.
    previousBlockHash: previousBlockHash,  // 이전 블록의 데이터, 또는 이전 블록에서 현재 블록까지의 데이터를 해싱한 값
    hash: hash,  // newBlock 객체에서 온 값. 현재 블록의 데이터를 해싱한 값. newTransactios를 해싱 함수에 매개변수로 전달 → 트랜잭션들은 하나의 문자열로 압축되며 hash 값이 된다.
  };
  this.pendingTransactions = [];  // 새로운 블록을 만들 때, 미결 트랜잭션 배열을 초기화 한다. 새로운 블록을 만들 때, 모든 새로운 트랜잭션들을 해당 블록에 추가하기 때문이다.
  this.chain.push(newBlock);  // 새로운 블록을 체인에 추가.
  return newBlock;  // newBlock 반환
}

// 블록체인에서 가장 마지막 블록 반환
Blockchain.prototype.getLastBlock = function() {
  return this.chain[this.chain.length - 1];
}

// 새로운 트랜잭션 생성
Blockchain.prototype.createNewTransaction = function(amount, sender, recipient) {
  const newTransaction = {
    amount: amount,
    sender: sender,
    recipient: recipient,
  };
  this.pendingTransactions.push(newTransaction);
  return this.getLastBlock()['index'] + 1;
}

// 블록을 입력받아 이 블록의 데이터를 고정된 길이의 문자열로 해싱  
Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {  
  const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
  const hash = sha256(dataAsString);
  return hash;
}

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
  let nonce = 0;
  let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
  while (hash.substring(0, 4) !== '0000') {
    nonce += 1;
    hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
  }
  return nonce;
}

module.exports = Blockchain;  // Blockchain 모듈 export 
