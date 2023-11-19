import { render, screen } from '@testing-library/react'
import TodoList from '../TodoList'

const mockTodos = [
    {
        "userId": 1,
        "title": "new Todo 1",
        "completed": false,
        "id": 1
    },
    {
        "userId": 1,
        "title": "new Todo 2",
        "completed": true,
        "id": 2
    },
]

const mockSetTodos = jest.fn()

describe('TodoList', () => {

    it('should render a list', () => {
        render(<TodoList todos={mockTodos} setTodos={mockSetTodos} />)

        const todosArray = screen.getAllByRole('article')

        expect(todosArray.length).toBe(2)
    })


})