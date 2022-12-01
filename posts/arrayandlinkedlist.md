---
title: 'Array and LinkedList'
date: '2022-12-01'
---
Array 의 element 들은, 인접한 memory 위치에 저장  
LinkedList 의 element 들은, memory 어딘가에 저장  
새로운 element 의 memory 위치 주소는, linked list 의 이전 node 에 저장  

데이터 접근이 주 업무일 경우 → Array
데이터 수정이 주 업무일 경우 → Linked List
전반적인 내용을 보면, Array 보다 Linked List 의 사용이 훨씬 좋아보이지만,
일반적인 알고리즘 문제를 풀 때는 Linked List 보다 Array 가 훨씬 빠르고 편리  
대부분의 알고리즘 문제는 메모리 공간의 범위를 파악할 수 있도록, N 의 크기가 주어지기 때문  
따라서, 배열의 크기를 MAX 로 초반에 잡는다면, Array 가 훨씬 더 편리하고 빠름  
Linked List는 요소를 삽입, 삭제할 때마다 메모리의 할당,해제가 일어남  
이런 작업은 시간복잡도에 포함되지는 않지만, 시스템 콜(System Call)을 사용하는 구문은 시간 소요가 꽤 걸립니다.  

- [https://wooono.tistory.com/281]()