import React,{useEffect} from "react";

function HistorySample({history}) {
    //뒤로가기
    const goBack = () =>{
        history.goBack();
    }
    //특정경로 이동
    const goHome = () =>{
        history.push('/');
    }
    const replaceToHome=()=>{
        history.replace('/');
    }
    const unblock = history.block('real go?');
    return () =>{
        //언마운트 될때는 이탈방지를 비활성화
        unblock();
    }

    useEffect(()=>{
        console.log(history);
        history.block('정말 떠나실껀가요?')
    },[history])
  return (
      <div>
          <button onClick={goBack}> goback</button>
          <button onClick={goHome}>go home</button>
          <button onClick={replaceToHome}>go home replace</button>

      </div>
  )
}

export default HistorySample;
