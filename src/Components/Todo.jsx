import { useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
    const [todoList, setTodoList] = useState([])

    const inputRef = useRef()

    const add = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === '') {
            return null;
        }
        else {
            const newTodo = {
                id: Date.now(),
                text: inputText,
                iscompleted: false,
            }
            setTodoList((prev) => [...prev, newTodo])
            inputRef.current.value = '';
        }
    }


    return (
        <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-center gap-3 items-center mb-4">
                <img className='w-8' src={todo_icon} alt="todo logo" />
                <h1 className="text-3xl font-bold text-center text-stone-800">Todo List</h1>
            </div>
            <div className="bg-stone-700 p-4 rounded-lg mt-4 w-96">
                <input type="text" ref={inputRef} className="w-full p-2 rounded-lg focus-visible:outline-transparent bg-white" placeholder="Add a new todo" />
                <button onClick={add} className="bg-stone-500 text-white p-2 rounded-lg w-full mt-4 cursor-pointer">Add</button>
            </div>
            <div className="bg-stone-700 p-4 rounded-lg mt-4 w-96">
                <h2 className="text-xl font-bold text-white">Todo</h2>

                {todoList.map((todo, index) => (
                    <TodoItems key={todo.id} text={todo.text} />
                ))}


            </div>
        </div>
    )
}

export default Todo