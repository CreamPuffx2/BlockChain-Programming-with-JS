/* blockchain을 만들기 위한 코드 */

// 클래스 문법을 통해 Blockchain 구현
class Blockchain {
  const
}
// 생성자 함수를 통해 Blockchain 구현
function Blockchain () {
  this.chain = []; // 채굴한 블록들은 이 배열 안에 체인으로 저장 - [ block, block, block, ... ]
  this.newTransactions = []; // 블록에 아직 저장되지 않은 모든 트랜잭션을 저장
}
