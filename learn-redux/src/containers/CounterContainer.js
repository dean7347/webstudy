import React from "react";

import Counter from "../components/Counter";
//상태조회
import {connect} from 'react-redux';
import { decrease, increase, setDiff } from "../modules/counter";

function CounterContainer({
    number,
    diff,
    increase,
    decrease,
    setDiff
}) {
   
  return (
      <Counter number={number} 
      diff ={diff}
      onIncrease= {increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
      />
  );
}
//커넥트 필수 함수
const mapStateToProps= (state) =>({
    number :state.counter.number,
    diff:state.counter.diff
})
const mapDispatchToProps = {
    // onIncrease: ()=>dispatch(increase()),
    // onDecrease:() => dispatch(decrease()),
    // onSetDiff:(diff)=>dispatch(setDiff(diff))
    increase,decrease,setDiff
}

//호출방법
export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer);
