import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../feature/todo/todoSlice';

export default function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [editingTodo, setEditingTodo] = useState(null);
    const [updatedText, setUpdatedText] = useState('');
    const inputRefs = useRef({});

    const startEditing = (todo) => {
        setEditingTodo(todo.id);
        setUpdatedText(todo.text);
        setTimeout(() => {
            inputRefs.current[todo.id].focus();
        }, 0); // Ensure the focus is set after rendering
    };

    const handleUpdate = (id) => {
        dispatch(updateTodo({ id, title: updatedText }));
        setEditingTodo(null); // Exit editing mode
    };

    return (
        <div>
            <h3>Todos</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        {editingTodo === todo.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={updatedText}
                                    onChange={(e) => setUpdatedText(e.target.value)}
                                    ref={(el) => inputRefs.current[todo.id] = el}
                                />
                                <button onClick={() => handleUpdate(todo.id)}>Save</button>
                                <button onClick={() => setEditingTodo(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <p>{todo.text}</p>
                                <button onClick={() => startEditing(todo)} className='edit-todo'>
                                    <i className="fa-duotone fa-edit"></i> Edit
                                </button>
                                <button onClick={() => dispatch(removeTodo(todo.id))} className='remove-todo'>
                                    <i className="fa-duotone fa-solid fa-trash"></i> Remove
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}


