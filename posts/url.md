---
title: 'URL을 입력하면'
date: '2022-11-21'
---

<h2>URL을 입력하면, 어떠한 순서로 문서를 불러 올 수 있게 될까?</h2>

</br>
</br>

1. 웹 사이트를 호스팅하는 웹 서버의 위치 조회  
1-1.  HTTPS(Hypertext Transfer Protocol Secure)는 브라우저에 전송 계층 보안(TLS)을 사용하여 서버에 연결하도록 지시
1-2.  도메인 이름 시스템(DNS) 조회하여 도메인 이름을 기반으로 서버의 IP 주소를 찾게 된다, 주소 뒤에 경로를 통해 리소스에 도달하게 된다.
그리고 조회를 할 때, DNS는 검색 속도가 중요하여, 미리 저장된 캐쉬를 사용하게 되는데, 이에 웹 브라우저는 고유한 캐시, 운영 체제 캐시, 라우터의 로컬 네트워크 캐시, 회사 네트워크 또는 인터넷 서비스 제공업체(ISP)의 DNS 서버 캐시를 확인한다. 특정 웹 브라우저는 사용자가 링크를 따라가기 전에 미리 도메인 네임을 확인하는 DNS  프리페치(Prefetch)라는 기능을 가지고 있기도 한다. 웹 페이지 내에 도메인명을 미리 확인되면 사용자가 해당 도메인으로 이동할 때, DNS 확인 시간으로 인한 효과적인 지연이 발생하지 않는다.
2. 웹 서버에 연결  
인터넷에 연결된 웹 브라우저 요청 패킷은 일반적으로 TCP/IP(Transmission Control Protocol/Internet Protocol)라고 하는 전송 제어 프로토콜을 사용하여 라우터 장비, 인터넷 서비스 제공회사 교환기를 통해 이동되어, 통신 회사간 경로인 라우팅 테이블을 따라서 연결할 IP 주소가 있는 웹 서버를 찾는다.  
 서버에 직접 도달하는 방법은 위치에 따라 있기에 많은 웹 사이트들이 직접 서버에 연결하기 보다는 콘텐츠 전송 네트워크(CDN)를 사용하여 정적 및 동적 콘텐츠를 웹 브라우저 가까이에 위치 
 웹 서버와 TCP 연결을 설정하고, HTTP를 통해 평문 통신을 시작한다. 그러나, HTTPS를 사용하는 경우 주고 받는 데이터의 암호화를 위한 TLS (Transport Layer Security) 핸드셰이크라는 추가 과정을 수행하게 된다.  
 웹 브라우저가 서버에 연결되면, HTTP(s) 프로토콜에 대한 통신 규칙을 따릅니다. 
3. 특정 페이지를 가져오기 위한 요청 전송  
웹 브라우저가 페이지의 콘텐츠를 요청하기 위해 서버에 HTTP 요청을 전송하는 것으로 시작한다. HTTP 요청에는 요청 라인, 헤더(또는 요청에 대한 메타데이터) 및 본문이 포함됩니다. 요청 라인에는 클라이언트(이 경우 브라우저)가 수행하려는 작업을 서버가 결정하는 데 사용할 수 있는 정보가 포함되어 있다.
요청 헤더(Request Header)는 요청을 라우팅하는 데 도움이 되는 추가 정보를 클라이언트에서 전달하고, 어떤 유형의 클라이언트(사용자 에이전트)가 요청을 수행하는지 나타내며, A/B 테스트, 블루/그린 배포 및 카나리 배포를 지원하는 데 사용할 수 있으며, 키-값 페어로 이루어져 있다.

4. 웹 서버의 응답을 처리  
5. 사용자가 웹 사이트와 상호 작용할 수 있도록 페이지를 렌더링하는 방법  






참고)
- [https://aws.amazon.com/ko/blogs/korea/what-happens-when-you-type-a-url-into-your-browser/]()