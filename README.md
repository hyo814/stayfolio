## 프론트엔드 테스트

---

- React 페이지 만들기

  하단의 요구사항을 읽고 실제로 동작하는 React 코드를 작성해주세요.

  `yarn dev`명령어를 통해 결과를 브라우져([http://localhost:3000)에서](http://localhost:3000)%EC%97%90%EC%84%9C/) 확인할 수 있어야 합니다.

  ### 준비

    - Node.js
    - [Next.js](https://github.com/zeit/next.js/)
    - [json-server](https://github.com/typicode/json-server)

  ### 요구사항

  [db.json](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/678463a0-4834-4f7e-98e6-c1a47f53d7c1/db.json)

  **API Server**

    - json-server를 사용하고 첨부된 `db.json`을 이용합니다.
    - 개발 피시에서 `json-server`를 실행하고 사용합니다. (9000 port)
        - `$ json-server -p 9000 db.json`
    - API 명세는 다음과 같습니다.
        - 리스트 - GET /stores
        - 상세 - GET /stores/:id

  **Library & Framework**

    - Next.js는 React를 기반으로 한 정적-서버 사이드 렌더링 프레임워크 입니다. github의 [README.md](https://github.com/zeit/next.js/)를 보고 사용법을 익힌
      후 하단의 요구사항을 구현합니다.
    - CSS 프레임워크를 한가지 골라서 적용합니다. [Material-UI](https://github.com/callemall/material-ui)
      , [Ant-design](https://github.com/ant-design/ant-design)
      , [React-Bootstrap](https://github.com/react-bootstrap/react-bootstrap)등 어떤 것도 괜찮습니다.

  **화면**

  맛집 리스트를 보여주고 리스트 중 하나의 아이템을 선택하면 팝업으로 상세 설명을 보여줍니다.

    - 헤더 - 바디 - 푸터 형식으로 표현 =>  pages/_app.js (1번)
    - 헤더에는 프로젝트이름(`AWESOME FOOD STORE`)과 메뉴(`ABOUT`+`STORE`) 표현
      <br/> => (2번) pages/component/Header.js
    - 푸터에는 카피라이트 추가(`@ 2022 내이름`) => (3번) pages/component/Footer.js
    - ABOUT엔 간단한 프로젝트 소개 문구 표현 (정적 페이지) => (4번) pages/component/About.js
    - STORE 리스트는 정사각형 이미지 그리드로 표현 (REST API 사용)
      <br/> => (5번) 리스트 : pages/component/Store.js
    - 하나의 아이템을 선택하면 팝업을 띄우고 맛집 이름과 사진, 설명, 홈페이지 바로가기(url이 있을 경우)를 표현
      <br/> => (6번) 상세 페이지 : pages/component/Detail.js
    - 팝업 오른쪽 위에 X버튼을 넣고 누르면 팝업이 닫힘
      <br/> => (7번) 모달창 구현 : pages/component/Store.js 과 pages/component/Detail.js , 마지막으로
      pages/component/BodyBlackout.js
    - 정의하지 않은 url로 접근시 에러 페이지를 보여주고 5초 후 메인 페이지로 이동
  <br/> => (8번) pages/404.js 랑 pages/500.js

  ### 결과 샘플

  [커먼그라운드 eat 화면](https://www.common-ground.co.kr/eat.html)을 참고하세요.