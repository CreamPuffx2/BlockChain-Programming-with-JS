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
  this.newTransactions = [];  // 블록에 아직 저장되지 않은 모든 트랜잭션들을 저장.
}
