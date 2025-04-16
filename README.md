# 프로젝트 이름

Prisma, Express를 이용한 CRUD 구현

## 📦 실행 방법

```bash
git clone https://github.com/your-id/project-name.git
cd project-name
npm install

nodemon ./src/app.js
또는
cd /src
nodemon app.js
```

## 상세 기술

| `productService.js` | prisma를 사용하여 mysql DB에 접속 후 실제 데이터 조작 |

- getAll : 상품 전체를 볼수 있는 부분
- getProduct : 이름으로 상품을 검색해 그 상품에 대한 정보를 가져오는 부분
- createProduct : 이름과 가격을 통해 상품을 추가하는 부분
- updateProduct : id를 검색해 이름과 가격을 받고 일치하는 데이터 수정
- deleteProduct : id값을 받아와 해당 id 데이터 삭제

| `productRoute.js` | HTTP 요청을 받아와 처리하는 부분 |

- 각 상태에 따라 성공메시지, 에러메시지 출력

| `existor.js` | 상품 조회시 존재하는 상품인지 확인하는 부분 |

- 파라미터로 name을 받아와 그 상품이 존재하는지 확인하는 함수

| `validator.js` | 실제 상품을 등록할때 예외 처리하는 부분 |

- req.body가 있는지 확인
- 존재시 name, price 값을 받아옴
- 이름과 가격이 공백인지 확인
- 이름에 한글, 영어, 숫자만 있는지 확인
- 가격에 숫자만 들어가도록 확인
- 가격이 0 이상인지 확인
