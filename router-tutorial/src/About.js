import React from "react";
import qs from 'qs'
function About({location}) {
    //location에 쿼리가 전달된다

    const query= qs.parse(location.search,{
       //?제거
        ignoreQueryPrefix: true
    });
    //문자열로 가져와진다 true로 비교 x
    const detail = query.detail ==='true'
  return (
      <div>
          <h1>소개</h1>
          <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트</p>
            {detail && <p>detail is true</p>}
      </div>
  );
}

export default About;
