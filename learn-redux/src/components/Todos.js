import React,{useState} from 'react';

const TodoItem = React.memo(function TodoItem({todo,onToggle}){
    return (
        <li style={{
            textDecoration:todo.done ? 'line-through':'none'
        }}
        onClick={()=> onToggle(todo.id)}
        >
            {todo.text}

        </li>
    )

})

const TodoList = React.memo(function TodoList({todos,onToggle}){
    return (
        <ul>
            {
                todos.map(todo=> <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                />)
            }
        </ul>
    )
})

function Todos({todos,onCreate,onToggle}){
    const [text,setText]=useState('');
    //모든 상태를 리덕스에서 관리하는것이 아니라 필요할때는 useState훅 사용하면된다
    const onChange = e => setText(e.target.value);
    const onSubmit = e =>{
        //새로고침 방지
        e.preventDefault();
        onCreate(text);
        setText('');
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={text} onChange={onChange} placeholder="할일 입력"/>
                <button type="submit">insert</button>
            </form>
            <TodoList
                todos={todos}
                onToggle={onToggle}
            />
        </div>
    )
}

export default React.memo(Todos);