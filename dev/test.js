/* blockchain.js 를 테스트하기 위한 코드 */

// import Blockchain from './blockchain'
const Blockchain = require('./blockchain')

// Honey Pot Coin
const HPC = new Blockchain();
HPC.createNewBlock(2345, 'jix23sdf23', '34s9x8d783');

/*
1. index
2. timestamp
3. transactions
4. nonce
5. hash
6. previousBlockHash
*/

console.log(HPC);
