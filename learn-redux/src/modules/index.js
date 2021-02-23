//루트리듀서는 컴파인 리듀서 불러옴
import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,todos
})

export default rootReducer