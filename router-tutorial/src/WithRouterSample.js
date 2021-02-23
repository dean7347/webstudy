import React from "react";
import {withRouter} from 'react-router-dom';
function WithRouterSample(location,match,history) {
  return (
      <div>
          <h4>location</h4>
          {/* 제이슨 객체 문자열로 변환 들여쓰기 */}
          <textarea value={JSON.stringify(location,null,2)} readOnly/>
         
          <h4>match</h4>
          {/* 제이슨 객체 문자열로 변환 들여쓰기 */}
          <textarea value={JSON.stringify(match,null,2)} readOnly/>
          <button onClick={()=>history.push('/')}>home</button>
      </div>
  )
}

export default withRouter(WithRouterSample);
