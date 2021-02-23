## /dev
* blockchain.js : blockchain을 만들기 위한 코드
* test.js : blockchain을 테스트하기 위한 코드 

블록체인의 동작과 탈중앙화 네트워크
탈중앙화 네트워크에서 호스팅되는 완전한 블록체인 프로토타입

* 블록체인을 안전하게 만드는 작업증명(proof-of-work) 수행
* 채굴 프로세스를 통한 새 블록 생성
* 변경할 수 없는 새 트랜잭션 생성
* 전체 블록체인과 각 블록 내의 모든 데이터 검증
* 주소 / 트랜잭션 / 블록 데이터 검색

##### 블록체인의 데이터 구조
* 증명작업(proof-of-work)
* 새 블록 채굴(mining)
* 트랜잭션 생성
* 체인의 유효성 확인
* 주소 데이터 검색 및 기타 기능

### 1. 블록체인 구축
* 생성자 함수를 사용하여 블록체인 데이터 구조를 생성
* 프로토타입에 여러 메소드들을 추가하여 다양한 기능 추가
* 블록체인에 새로운 블록들과 트랜잭션들을 생성하는 특정한 기능 추가
* 데이터와 블록들을 해시하는 기능 추가

* 작업증명 이해 및 블록체인을 위한 구현 메서드 학습

### 1) `Blockchain` -> 생성자 함수를 사용하여 <u>블록체인 데이터 구조 생성</u>

#### (1) ★ `createNewBlock`: <u>새로운 블록</u> 생성/채굴
* index
* timestamp
* transactions
* nonce
* previousBlockHash
* currentBlockHash

#### (2) `getLastBlock`: 블록체인 가장 <u>마지막 블록</u> 반환

#### (3) ★ `createNewTransaction`: <u>새 트랜잭션</u> 생성
* **`amount`**: 해당 트랜잭션을 통해 송금하는 양
* **`sender`**: 발송인 주소
* **`recipient`**: 수신인 주소
모든 트랜잭션 객체들은 **금액**, **발송인 주소**, **수신인 주소**를 가지고 있음
> 새로운 트랜잭션이 생성될 때마다 트랜잭션들은 `newTransaction` 배열에 추가됨
> 배열 안의 모든 트랜잭션들은 *아직* 확정된 것은 아님. 즉, 블록체인에 기록된 것은 아님
> 새로운 블록이 생성될 때 블록체인에 기록됨
> 이 모든 새로운 확정되지 않음 트랜잭션들은 **미결 트랜잭션**이며, 아직 검증되지 않은 상태
> 이 트랜잭션들은 createNewBlock 메소드로 새로운 블록을 생성했을 때 검증되고, 확정되고, 블록체인에 기록됨
> 새로운 블록이 채굴되었을 때(즉, 새로운 블록이 생성되었을 때) 모든 미결 트랜잭션이 블록체인 안에 기록되고, 확정되며, 영원히 변하지 않게 됨

#### (4) `hashBlock`: <u>데이터 해싱</u>
블록을 입력 받아, 해당 블록의 데이터를 고정된 길이의 문자열로 해싱
> SH256 해싱 함수
> 임의의 문자열을 매개변수로 받아서 해당 문자열을 해싱한 후 고정된 길이의 해싱된 문자열을 반환
> 주어진 입력값에 대해 항상 동일한 출력값을 반환
> https://passwordsgenerator.net/sha256-hash-generator/



### 2. 블록체인과 상호작용할 수 있는 API
API 서버를 통해 블록체인 데이터 구조에 내장된 모든 기능을 사용할 수 있음

### 3. 분산 네트워크 구축하는 방법
여러 개의 서버가 실행되어 각각 별개의 노드로 동작하게 되는 것을 의미
분산 네트워크에 참여한 모든 노드는 적절히 상호 작용하여 데이터를 올바른 형식으로 공유하도록 함

### 4. 생성된 모든 새로운 블록 혹은 트랜잭션이 전체 네트워크를 통해 브로드캐스트(broadcast)되는지 확인하여 전체 네트워크를 동기화하는 방법

### 5. 합의(consensus) 알고리즘
이 알고리즘은 전체 블록체인이 동기화된 상태를 유지하고 네트워크의 각 노드가 정확한 블록체인 데이터를 가지고 있는지 확인하는데 사용함

### 6. 블록 탐색기(explorer) 만들기
사용자에게 익숙한 방식으로 자체 블록체인을 추적할 수 있게 하고, 
특정한 블록의 트랜잭션과 주소에 대해 조회할 수 있도록 해줌

