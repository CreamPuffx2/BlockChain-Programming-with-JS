/* blockchain.js 를 테스트하기 위한 코드 */

// import Blockchain from './blockchain'
const Blockchain = require('../blockchain')

/* Honey Pot Coin */
const HPC = new Blockchain();

// 새 블록 생성(1)
HPC.createNewBlock(7891234, 'JIX23QWER23', '34S9X8DG783');

// 새 트랜잭션 생성 테스트
const createTX1 = HPC.createNewTransaction(100, 'RYAN0987KIM123', 'JADE3456JEON43');
const createTX2 = HPC.createNewTransaction(1000, 'JADE3456JEON43', 'RYAN0987KIM123');

console.log('TX index: ', createTX1, createTX2)

// 블록 체굴(2)
HPC.createNewBlock(2349876, 'AKM3847EJF23', 'JFI3452NJN34');

const createTX3 = HPC.createNewTransaction(300, 'RYAN0987KIM123', 'JADE3456JEON43');
const createTX4 = HPC.createNewTransaction(4000, 'JADE3456JEON43', 'RYAN0987KIM123');
const createTX5 = HPC.createNewTransaction(5000, 'JADE3456JEON43', 'RYAN0987KIM123');

console.log('TX index: ', createTX3, createTX4, createTX5)

// 블록 채굴(3)
HPC.createNewBlock(3748263, 'MKI3948JUJ34', 'NCJD093IJI31');

console.log(HPC);
console.log('chain 1: TXs >> ', HPC.chain[0].transactions);
console.log('chain 2: TXs >> ', HPC.chain[1].transactions);
console.log('chain 3: TXs >> ', HPC.chain[2].transactions);
