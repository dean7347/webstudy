import React from "react";
import Counter from "../components/Counter";
//상태조회
import {useSelector,useDispatch,shallowEqual} from 'react-redux';
import { decrease, increase, setDiff } from "../modules/counter";

function CounterContainer() {
    const {number,diff}=useSelector(state => ({
        //store.getState();반환객체가 여기로 온다
        number: state.counter.number,
        diff:state.counter.diff
    }),shallowEqual);
    // const number=useSelector(state=> state.counter.number);
    // const diff=useSelector(state=> state.counter.diff);
    const dispatch= useDispatch();
    const onIncrease= () => dispatch(increase())
    const onDecrease= () => dispatch(decrease())
    const onSetDiff = diff => dispatch(setDiff(diff))

  return (
      <Counter number={number} 
      diff ={diff}
      onIncrease= {onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
      />
  );
}

export default CounterContainer;
