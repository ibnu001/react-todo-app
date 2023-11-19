
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from 'react'
import { FiTrash } from 'react-icons/fi'
import type { Todo } from "@/types/Todo"


type Props = {
    todo: Todo,
    setTodos: Dispatch<SetStateAction<Todo[]>>
}

export default function TodoItem({ todo, setTodos }: Props) {

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setTodos(prevTodos => [...prevTodos.filter(prev => prev.id !== todo.id), { ...todo, completed: !todo.completed }])
    }

    const handleDelete = async (e: MouseEvent<HTMLButtonElement>) => {
        setTodos(prev => [...prev.filter(td => td.id !== todo.id)])
    }

    return (
        <article className="my-4 flex justify-between items-center">
            <label className="text-2xl hover:underline" data-testid="todo-item" htmlFor={todo.id.toString()}>
                {todo.title}
            </label>
            <div className="flex items-center gap-4">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    id={todo.id.toString()}
                    name="completed"
                    onChange={handleChange}
                    className="min-w-[1.5rem] min-h-[1.5rem]"
                />

                <button
                    data-testid="delete-button"
                    onClick={handleDelete}
                    className="p-3 text-xl rounded text-black max-w-xs bg-red-400 hover:cursor-pointer hover:bg-red-300">
                    <FiTrash />
                </button>
            </div>
        </article>
    )
}