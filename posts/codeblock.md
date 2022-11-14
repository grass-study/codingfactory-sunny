---
title: 'Codeblock'
date: '2022-11-14'
---

코드 블록을 삽입하려고 하는데,  
이쁘게 삽입이 됬으면 좋겠다.  
cdn을 이용하여, 불러온 다음에 코드 블록을 바꿀 수 있나?  
아니면 다른 방법이 있을까?  
그리고 md 파일 마지막 생성 시점으로 자동으로 date 가져오게 설정을 또 바꾸고 싶다영....  
그리고 이거 현재 
`<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />`
이렇게 삽입이 된채로 불러와 지고 있는데,
라이브러리 활용해서 바꿔야할 것 같다...  
갈길이 삼만리 오만리 구만리  
```javascript
<Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>

```
https://blog.itcode.dev/posts/2021/11/07/nextjs-reorganization-5  
이 블로그의 codeblock ide가 마음에 들긴한는데  
손이 엄청 많이 갈 거 같아섴ㅋㅋㅋㅋㅋ  
사실 어차피 스터디 할 때 라이트하게 쓰고, 장난감 삼아 next-js로 구현하는 것 같긴한데 이상한 곳에 꽂힌단 말이지ㅋㅋㅋ  
이것 저것 라이브러리 부터 다운 받아야할 것 많긴한데, 아직도 next-js 튜터리얼도 안훑어봐서 아마도 구현이 아주 나나아아아아중에 할 듯하다.  
notion이랑 연동해서 template 만든것도 자료 관리에 아주 유용해보여서, 본격적인 블로그는 아마 notion과 연동하여 사용하는 방향으로 만들지 않을까=>시간은 엄청 걸릴 것 같다. 우선 취업먼저 하장 힝....  

