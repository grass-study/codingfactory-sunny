---
title: 'GET and POST method, AND About webpacks'
date: '2022-11-24'
---

1. Get, Post 방법의 차이
Get은 서버의 리소스에서 데이터를 요청할 때,
Post는 서버의 리소르를 새로 생성하거나 업데이트를 할 때 사용 된다.  

|	- |GET|POST|  
|------|---|---|    
| 캐시	|⭕️	|❌|  
|브라우저 기록 |⭕️|❌  
|북마크 추가|⭕️|❌|
|데이터 길이 제한|⭕️|❌|
|HTTP 응답 코드|200(Ok)|201(Created)|  
|언제 주로 사용하는가?| 리소스 요청|리소스 생성|  
|리소스 전달 방식|쿼리스트링|HTTP Body|  
|idempotent|⭕️|❌|  


- [https://velog.io/@songyouhyun/Get%EA%B3%BC-Post%EC%9D%98-%EC%B0%A8%EC%9D%B4%EB%A5%BC-%EC%95%84%EC%8B%9C%EB%82%98%EC%9A%94]()

2. Webpack 이란?

Webpack을 알아보기 위해선, 우선 bundler에 대해서 알아봐야 하는데,  
번들러는 단순히 자바스크립트 파일들 뿐만 아니라, 애플리케이션에 필요한 모든 종류의 파일들을 모듈 단위로 나누어 최소한의 파일 묶음(번들)으로 만들어 낸다. 뿐만 아니라 자바스크립트 파일을 외부에서 알아 보기 힘들게 코드를 변환하는 작업(Uglyfy)을 한다거나, 최신 문법의 자바스크립트를 모든 웹 브라우저에서 작동할 수 있게 ES5문법으로 변환(Transpile)하는 등 다양한 기능을 지원 한다. 그리고 Webpack은 이런 bundler 중의 하나 인 것이다.
그리고 bundler를 사용하게 되면 이러한 장점이 있다.

- 여러 파일을 최적화 해서 하나의 파일로 묶기 때문에 주고 받는 파일의 크기를 줄여주기 때문에  
=>  네트워크 병목현상이 줄어 든다.
- 모듄 단위의 코딩으로 인해  
=> 유지보수 및 코드의 가독성이 향상 된다.
- 다양한 서드 파티가 지원 가능하여,  
=> 특히, Webpack의 경우 Babel-loader과 같은 다양한 로더를 이용해서 모던 자바스크립트나 SASS를 사용할 수 있다.



- [https://blog.leehov.in/24]()
- [https://www.hanl.tech/blog/webpack%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-%EC%A0%95%EC%9D%98%EC%99%80-%ED%95%84%EC%9A%94%EC%84%B1-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EC%9E%A5%EB%8B%A8%EC%A0%90/]()
- [https://yamoo9.gitbook.io/webpack/react/create-your-own-react-app]()





ps. md 파일 변환 과정에서, 적절하게 해석을 아직도 하지 못하는 것 같다...
md 언어를 인식하지 못하다니...