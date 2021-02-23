import React from "react";
import Profile from './Profile'
import {NavLink,Route} from 'react-router-dom'
import RouterHookSample from "./RouterHookSample";


function Profiles() {
  return (
      <div>
          <h3>user list</h3>
          <ul>
              <li><NavLink to ="/profiles/velopert" activeStyle={{background:'block',color:'whilte'}}>Velo</NavLink></li>
              <li><NavLink to ="/profiles/Homer" activeStyle={{background:'block',color:'whilte'}}>Homer</NavLink></li>
          </ul>
            {/* 랜더를 사용하면 특정 컴포넌트가 아닌 함수형 컴포넌트 바로 선언하고 넣기가능 */}
          <Route path="/profiles" exact render={()=><div>select user</div>} />
          <Route path="/profiles/:username" component={Profile}/>    
          <RouterHookSample/>
      </div>
  )
}

export default Profiles;
