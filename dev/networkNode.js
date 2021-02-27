const express = require('express');
const bodyParser = require('body-parser');

const Blockchain = require('./blockchain');

const app = express();
const bitcoin = new Blockchain();

// JSON 형태 요청 Parsing
app.use(bodyParser.json());
// Form-data 형태 요청 Parsing
app.use(bodyParser.urlencoded({ extended: false }))

// 전체 블록체인을 가져와 데이터 확인
app.get('/blockchain', function(req, res) {
  res.send(bitcoin);
});

// 새로운 트랜잭션 생성
app.post('/transaction', function(req, res) {
  console.log(req.body);

  res.send(`The amount of the transaction is ${req.body.amount} bitcoin.`);
});

// PoW 메소드 사용 - 새 블록 채굴
app.get('/mine', function(req, res) {

});

app.listen(3000, function() {
  console.log('listening on port 3000...');
});