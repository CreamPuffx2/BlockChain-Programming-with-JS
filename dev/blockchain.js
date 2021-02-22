/* blockchain을 만들기 위한 코드 */

/* 1) 생성자 함수를 통해 Blockchain 구현 */
function Blockchain () {
  this.chain = []; // 채굴한 블록들은 이 배열 안에 체인으로 저장 - [ block, block, block, ... ]
  this.pendingTransactions = []; // 미결 트랜잭션
}

/* 2) createNewBLock: 새로운 블록 생성 */
Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, currentBlockHash) {
  const newBlock = { // newBlock 객체는 Blockchain 안의 새로운 블록이 됨
    index: this.chain.length + 1, // 블록 넘버(몇 번째 블록?)
    timestamp: Date.now(), // 블록 생성 시점
    transactions: this.pendingTransactions, // 미결 트랜잭션 검증, 확정, 기록
    nonce: nonce, // proofOfWork 메서드 결과값. 작업증명을 통해 적법하게 새로운 블록을 만들었다는 증거
    previousBlockHash: previousBlockHash, // 이전 블록의 데이터를 해싱한 값.
    currentBlockHash: currentBlockHash, // 현재 블록의 데이터를 해싱한 값.
    // newTransactions를 hash 함수의 매개변수로 전달함. 트랜잭션들은 하나의 문자열로 압축되며 이것이 hash 값이 됨.    
  };

  this.pendingTransactions = []; // newTransactions 초기화. 새로운 블록을 만들 때, 모든 새로운 트랜잭션들을 해당 블록에 추가하기 때문
  this.chain.push(newBlock);

  return newBlock;
}

/* 3) getLastBlock: 블록체인에서 가장 마지막 블록 반환 */
Blockchain.prototype.getLastBlock = function () {
  return this.chain[this.chain.length - 1];
}

/* 4) createNewTransaction: 새 트랜잭션 생성 */
Blockchain.prototype.createNewTransaction = function (amount, sender, recipient) {
  const newTransaction = {
    amount, // 해당 트랜잭션을 통해 송금하는 양
    sender, // 송신인 주소
    recipient, // 수신인 주소
  }
  this.pendingTransactions.push(newTransaction);
  
  return this.getLastBlock()['index'] + 1; // 새로운 트랜잭션이 추가될 블록의 index 반환
}

module.exports = Blockchain;
