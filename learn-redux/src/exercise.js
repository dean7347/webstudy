import {createStore} from 'redux';  //스토어 만들기

//리덕스에서 관리할 상태 초기값
const initialState ={
    counter : 0,
    text: '',
    list: []
}

//액션타입 정의
const INCREASE='INCREASE';
const DECREASE='DECREASE';
const CHANGE_TEXT='CHANGE_TEXT';
const ADD_TO_LIST='ADD_TO_LIST';

//액션 생성함수
const increase=() =>({
        type:INCREASE,
})
const decrease=() =>({
    type:DECREASE,
})
const changeText=(text) =>({
    type:CHANGE_TEXT,
    text
})

const addToList = item =>({
    type:ADD_TO_LIST,
    item
})

//리듀서 state 초기상태가 필요하다 state undifind면 초기상태가 안만들어짐
function reducer(state = initialState,action){
    switch(action.type){
        case INCREASE:
            return{
                ...state,
                counter:state.counter+1,
            };
        case DECREASE:
            return{
                ...state,
                counter:state.counter-1,
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text:action.text,
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            };
        default:
            return state;
    }
}

//스토어 생성
const store = createStore(reducer);
console.log(store.getState())

//스토어 구독을 위한 함수 
const listener = () =>{
    const state = store.getState();
    console.log(state);
}

//리스너함수를 스토어에 구독
const unsubscribe = store.subscribe(listener);
//구독 해제
// unsubscribe();

//디스패치
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("h2"));
store.dispatch(addToList({id:1,text:'wow'}));
//개발자도구에서 사용하기
// window.store= store