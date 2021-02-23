import React from "react";
import WithRouterSample from "./WithRouterSample";

const profileData={
    velopert:{
        name:'kim',
        description:'FrontednEngineer @'
    },
    Homer:{
        name: 'homer simson',
        description: '심슨가족'
    }
}

//match는 라우터 컴포넌트에서 넣어주는 프롭스 자동으로 받아옴
function Profile({match}) {
    //"/profiles/:username" 이부분이다
    const {username}= match.params;
    const profile=profileData[username];

    if(!profile){
        return <div>존재하지 않는 사용자</div>
    }
  return (
  <div>
      <h3>{username} ({profile.name})</h3>
      <p>  
          {profile.description}
          <WithRouterSample/>
      </p>
  </div>)
}

export default Profile;
