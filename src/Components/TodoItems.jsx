import React from 'react'

const TodoItems = ({ text }) => {
    return (
        <div>
            <div className="flex justify-between items-center mt-2">
                <p className="text-white">{text}</p>
                <div className="flex items-center">
                    <button className="bg-stone-500 text-white p-2 rounded-lg cursor-pointer">Edit</button>
                    <button className="bg-stone-500 text-white p-2 rounded-lg ml-2 cursor-pointer">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItems
