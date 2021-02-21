/* blockchain을 만들기 위한 코드 */

/* 1) 생성자 함수를 통해 Blockchain 구현 */
function Blockchain () {
  this.chain = []; // 채굴한 블록들은 이 배열 안에 체인으로 저장 - [ block, block, block, ... ]
  this.newTransactions = []; // 블록에 아직 저장되지 않은 모든 트랜잭션을 저장
}

/* 2) 새로운 블록 생성 메서드 구현 */
Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, currentBlockHash) {
  const newBlock = { // newBlock 객체는 Blockchain 안의 새로운 블록이 됨
    index: this.chain.length + 1, // 블록 넘버(몇 번째 블록?)
    timestamp: Date.now(), // 블록 생성 시점
    transactions: this.newTransactions, // 새로운 블록에 저정되는 모든 트랜잭션들은 블록에 추가되기를 기다리던 모든 새로운 트랜잭션들임
    nonce: nonce, // proofOfWork 메서드 결과값. 작업증명을 통해 적법하게 새로운 블록을 만들었다는 증거
    previousBlockHash: previousBlockHash, // 이전 블록의 데이터를 해싱한 값.
    currentBlockHash: currentBlockHash, // 현재 블록의 데이터를 해싱한 값.
    // newTransactions를 hash 함수의 매개변수로 전달함. 트랜잭션들은 하나의 문자열로 압축되며 이것이 hash 값이 됨.    
  };
  this.newTransactions = []; // newTransactions 초기화. 새로운 블록을 만들 때, 모든 새로운 트랜잭션들을 해당 블록에 추가하기 때문
  this.chain.push(newBlock);

  return newBlock;
}

module.exports = Blockchain;