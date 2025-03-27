import React from 'react'

const TodoItems = ({ text, id, isCompleted, deleteTodo, toggle }) => {
    return (
        <div>
            <div className="flex justify-between items-center mt-2">
                <p onClick={() => { toggle(id) }} className={`text-white ${isCompleted ? '' : 'line-through'}`}>{text}</p>
                <div className="flex items-center">
                    <button className="bg-stone-500 text-white p-2 rounded-lg cursor-pointer" onClick={() => { toggle(id) }}>{!isCompleted ? 'Done' : 'Not Done'}</button>
                    <button onClick={() => { deleteTodo(id) }} className="bg-stone-500 text-white p-2 rounded-lg ml-2 cursor-pointer">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItems
