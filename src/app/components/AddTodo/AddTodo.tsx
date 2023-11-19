import { useState, FormEvent, SetStateAction, Dispatch } from "react"
import type { Todo } from "@/types/Todo"

type Props = {
    setTodos: Dispatch<SetStateAction<Todo[]>>
}

export default function AddTodo({ setTodos }: Props) {
    const [item, setItem] = useState("")

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!item) return

        setTodos(prev => {
            let highestId
            if (prev.length === 0) {
                highestId = 0
            } else {
                highestId = [...prev].sort((a, b) => b.id - a.id)[0].id;
            }
            return [...prev, { userId: 1, title: item, completed: false, id: highestId + 1 }]
        })

        setItem("")
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-2 items-center">

            <label hidden htmlFor="title">New Todo</label>
            <input
                type="text"
                id="title"
                name="title"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                className="bg-gray-50 rounded text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="New Todo"
                autoFocus
            />

            <button
                type="submit"
                className="p-2 text-xl text-black rounded max-w-xs bg-green-500 hover:cursor-pointer hover:bg-green-400 disabled:bg-gray-300"
                disabled={!item ? true : false}
            >
                Submit
            </button>

        </form>
    )
}