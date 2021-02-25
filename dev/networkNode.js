const express = require('express');

const app = express();

// 전체 블록체인을 가져와 데이터 확인
app.get('/blockchain', function(req, res) {

});

// 새로운 트랜잭션 생성
app.post('/transaction', function(req, res) {

});

// PoW 메소드 사용 - 새 블록 채굴
app.get('/mine', function(req, res) {

});

app.listen(3000, function() {
  console.log('listening on port 3000...');
});