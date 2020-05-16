const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(789457, 'OIUOEDJETH8754DHKD', '78SHNEG45DER56');
bitcoin.createNewTransaction(100, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');

bitcoin.createNewBlock(548764, 'AKMC875E6S1RS9', 'WLS214R7T6SJ3G2');
bitcoin.createNewTransaction(200, 'MIN01JAE43F1L2O34', 'H2KK93LL84JEONG43');
bitcoin.createNewTransaction(900, 'H2KK93LL84JEONG43', 'MIN01JAE43F1L2O34');
bitcoin.createNewTransaction(400, 'MIN01JAE43F1L2O34', 'H2KbircoinK93LL84JEONG43');

bitcoin.createNewBlock(548764, 'AKMC875E6S1RS9', 'WLS214R7T6SJ3G2');

console.log(bitcoin);
// console.log(bitcoin.chain[bitcoin.chain.length - 1]);
