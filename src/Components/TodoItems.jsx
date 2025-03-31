import React from 'react'

const TodoItems = ({ text, id, isCompleted, deleteTodo, toggle, editTodo }) => {
    return (
        <div>
            <div className="flex justify-between items-center mt-2 w-full">
                <p onClick={() => { toggle(id) }} className={`text-white w-40 block text-wrap ${isCompleted ? 'line-through' : ''}`}>{text}</p>
                <div className="flex items-center justify-end w-70">
                    <button onClick={() => editTodo(id, text)} className="bg-stone-500 text-white p-2 rounded-lg cursor-pointer">Edit</button>
                    <button className={`text-white ml-2 p-2 rounded-lg cursor-pointer ${isCompleted ? 'bg-orange-400' : 'bg-stone-500'}`} onClick={() => { toggle(id) }}>{!isCompleted ? 'Not Done' : 'Done'}</button>
                    <button onClick={() => { deleteTodo(id) }} className="bg-stone-500 text-white p-2 rounded-lg ml-2 cursor-pointer">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItems
