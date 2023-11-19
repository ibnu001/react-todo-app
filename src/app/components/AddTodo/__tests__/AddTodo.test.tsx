import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddTodo from '../AddTodo'

const mockSetTodos = jest.fn()

describe('AddTodo', () => {

    describe('Render', () => {

        it('should render the input', () => {
            render(<AddTodo setTodos={mockSetTodos} />)

            const input = screen.getByPlaceholderText('New Todo') 

            expect(input).toBeInTheDocument()
        })

        it('should render a disabled submit button', () => {
            render(<AddTodo setTodos={mockSetTodos} />)

            
            const button = screen.getByRole('button', {
                name: 'Submit'
            })

            expect(button).toBeDisabled()
        })

    })

    describe('Behavior', () => {

        it('should be able to add text to the input', async () => {
            render(<AddTodo setTodos={mockSetTodos} />)

            const input = screen.getByPlaceholderText('New Todo') 
            await userEvent.type(input, 'create todo')
            expect(input).toHaveValue("create todo")
        })

    })
})