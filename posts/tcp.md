---
title: 'TCP, UDP 에 관하여'
date: '2022-11-15'
---

[![](https://mermaid.ink/img/pako:eNp1Uk1Lw0AQ_SvLnBRCTZu0TXLViwdR0JOuh22zbaNNUmoC1tJCIXoQPfQgiB-gIIrQg6BiD_4is_kP7m5siUH3tPPmzds3s9OHum9TsKDZJZ0W2lpB2EP8HIS1H2R5Y2l1A-lfrxGbvqfJOhoOh8jewRBHD8nplF2fJaMJYhf3LJqy0weUkhHG3kI8-YwfJymgoPj8hd2-JdFL_DQSJSm-iGE3VSZck92O2dVzRkKIHl_OJJLxTXIZzaIsWchwYzWhcRexk_sfzzPxmrRdl09MhYfoI2s000reFvVs7OUGs765iqrZqdCcd14tH2xwPGt6rtoQ6aaoyjQ4zzZlceu_Zloy7eT_IMdyJGtPsP6c_Jy4J4n7gpj5sN8DAAVc2nWJY_N96YsEhqBFXYrB4lebNkjYDjBgb8CpJAz8zZ5XByvohlSBsGOTgK44hI_PBatB2gcc7RBv2_fdGYmHYPXhEKySahZUXTVNU6vomqFXygr0wNLKBdMwqrphFsuqqhml8kCBI6mgFnhU0Q21YmpGsVrUTAWo7QR-dy1dcbnpg2-4ik4w?type=png)](https://mermaid.live/edit#pako:eNp1Uk1Lw0AQ_SvLnBRCTZu0TXLViwdR0JOuh22zbaNNUmoC1tJCIXoQPfQgiB-gIIrQg6BiD_4is_kP7m5siUH3tPPmzds3s9OHum9TsKDZJZ0W2lpB2EP8HIS1H2R5Y2l1A-lfrxGbvqfJOhoOh8jewRBHD8nplF2fJaMJYhf3LJqy0weUkhHG3kI8-YwfJymgoPj8hd2-JdFL_DQSJSm-iGE3VSZck92O2dVzRkKIHl_OJJLxTXIZzaIsWchwYzWhcRexk_sfzzPxmrRdl09MhYfoI2s000reFvVs7OUGs765iqrZqdCcd14tH2xwPGt6rtoQ6aaoyjQ4zzZlceu_Zloy7eT_IMdyJGtPsP6c_Jy4J4n7gpj5sN8DAAVc2nWJY_N96YsEhqBFXYrB4lebNkjYDjBgb8CpJAz8zZ5XByvohlSBsGOTgK44hI_PBatB2gcc7RBv2_fdGYmHYPXhEKySahZUXTVNU6vomqFXygr0wNLKBdMwqrphFsuqqhml8kCBI6mgFnhU0Q21YmpGsVrUTAWo7QR-dy1dcbnpg2-4ik4w)

ㅠ_ㅠ 마크다운 mermaid 문법을 읽어들이지, 못하다니 역시 parsing 하는 라이브러리를 갈아 엎어야...

TCP(Transmission Control Protocol)
데이터를 메세지 형태로 보내기 위해 IP(Internet Protocol)과 함께 사용하는 프로토콜이다.
IP는 데이터 전송을 처리한다면, TCP는 패킷 추적 및 관리를 하게 된다.  
연결지향형인 TCP는 3-way handshaking이라는 과정을 통해 연결 후 통신을 시작하는데, 흐름제어와 혼잡 제어를 지원하며, 데이터의 순서를 보장한다. 그리고 햬제시에는 4-way handshaking을 통해 해제 하게 된다. 참고로, 흐름 제어란 보내는 측과 받는 측의 데이터 처리속도 차이를 조절해주는 것이고, 혼잡 제어는 네트워크 내의 패킷 수가 넘치게 증가하지 않도록 방지하는 것이다.  


UDP(User Datagram Protocol)
UDP를 해석하면 사용자 데이터그램 프로토콜(규약)이라는 뜻 이다. 데이터그램이란 독립적인 관계를 지니는 패킷이라는 뜻이다. TCP와 달리 UDP는 비연결형 데이터 프로토콜로서 TCP와 비교하여 낮은 보안성과 빠른 속도를 가진 특성을 지녔으며, 흐름제어 및 혼잡제어는 처리하지 못한다. 그리하여 신뢰성 보다는 연속성이 중요한 스트리밍 서비스에서 많이 사용된다.  
  

    

  
  


참고
- [https://mangkyu.tistory.com/15]()
- [https://cocoon1787.tistory.com/757]()
- [https://velog.io/@hidaehyunlee/TCP-%EC%99%80-UDP-%EC%9D%98-%EC%B0%A8%EC%9D%B4]()