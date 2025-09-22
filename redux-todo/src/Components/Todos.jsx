import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, update } from '../features/todoSlice';
import "../App.css"

function TodoComponent() {
    const [valueAdd, setValueAdd] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.value);

    const handleAddTodo = () => {
        if (valueAdd.trim()) {
            dispatch(add(valueAdd));
            setValueAdd('');
        }
    };

    const handleUpdateTodo = () => {
            dispatch(update({ index: editIndex, title: valueAdd, status: false }));
            setEditIndex(null);
            setValueAdd('');
    };

    return (
        <div>
            <h2>Todos:</h2>

            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    value={valueAdd}
                    onChange={(e) => setValueAdd(e.target.value)}
                />
                {editIndex !== null ? (
                    <button onClick={handleUpdateTodo}>Update Todo</button>
                ) : (
                    <button onClick={handleAddTodo}>Add Todo</button>
                )}
            </div>

            <ul>
                {todos.map((item, i) => (
                    <li key={i} style={{ listStyle: "none", marginTop: "10px" }}>
                        {item.title} - {item.status ? 'Completed' : 'Incomplete'}
                        <button
                            onClick={() => {
                                setEditIndex(i);
                                setValueAdd(item.title);
                            }}
                            style={{ marginLeft: "10px" }}
                        >
                            Edit
                        </button>
                        <button onClick={() => dispatch(remove(i))} style={{ marginLeft: "10px" }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoComponent;
