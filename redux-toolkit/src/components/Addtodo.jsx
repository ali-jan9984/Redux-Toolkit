import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../feature/todo/todoSlice';

 export default function AddTodos() {
    const [input, setInput] = React.useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    };

    return (
        <>
            <form onSubmit={addTodoHandler} className='todo-form'>
                <input
                    placeholder='enter your todo...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='todo-input'
                />
                <button type='submit' className='add-todo-button'>
                    Add Todo
                </button>
            </form>
        </>
    );
}
