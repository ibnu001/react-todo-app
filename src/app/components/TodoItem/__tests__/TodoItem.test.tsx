import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoItem from '../TodoItem'

const mockTodo = {
    "userId": 1,
    "title": "new Todo",
    "completed": false,
    "id": 1
}

const mockSetTodos = jest.fn()

describe('AddTodo', () => {

    describe('Render', () => {

        it('should render a label', () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />) 

            
            const label = screen.getByTestId('todo-item')

            expect(label).toBeInTheDocument()
        })

        it('should render a checkbox', () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />) 

            
            const checkbox = screen.getByRole('checkbox')

            expect(checkbox).toBeInTheDocument()
        })
    })

    describe('Behavior', () => {

        it('should call setTodos when checkbox clicked', async () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />) 

            
            const checkbox = screen.getByRole('checkbox')
            await userEvent.click(checkbox)

            expect(mockSetTodos).toHaveBeenCalled()
        })

    })
})