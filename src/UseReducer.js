import React, { useState, useReducer } from 'react';
import Todo from './components/Todo';

// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return { count: state.count + 1 }
//         case 'DECREMENT':
//             return { count: state.count - 1 }
//         case 'RESET':
//             return { count: 0 }
//         default:
//             return state
//     }
// }


export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

function newTodo(name) {
    return {
        id: Date.now(),
        name: name,
        complete: false
    }
}

function reducer(todos, action) {
    switch (action.type) {

        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]

        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            }));

        case ACTIONS.DELETE_TODO:
            return todos.filter(item =>
                item.id !== action.payload.id
            )

        default:
            return todos
    }
}

function UseReducer(props) {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName('')
    }

    console.log(todos);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input autoFocus type='text' value={name} onChange={e => setName(e.target.value)} />
            </form>

            {todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </>
    )

    // const [state, dispatch] = useReducer(reducer, { count: 0 })
    // return (
    //     <>
    //         <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    //         <span>{state.count}</span>
    //         <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    //         <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    //     </>
    // )
}

export default UseReducer;