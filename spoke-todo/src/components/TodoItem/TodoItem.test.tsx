/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-promise-in-fire-event */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from '@testing-library/react';
import TodoItem from './TodoItem.component';

describe('button', () => {
    it('should render with title prop correctly', () => {
        const { container } = render(<TodoItem 
            title='todo item'
        />);

        expect(container).toBeInTheDocument();
        expect(container).toHaveTextContent('todo item');
    })
    it('should show completed icon when staus is true', () => {
        const { getByTestId } = render(<TodoItem status={true} />);

        const completedIcon = getByTestId('to-do-item').querySelector('.completed');
        expect(completedIcon).toBeInTheDocument();
    })
    it('should show completed icon when staus is false', () => {
        const { getByTestId } = render(<TodoItem status={false} />);

        const completedIcon = getByTestId('to-do-item').querySelector('.not-completed');
        expect(completedIcon).toBeDefined();
    })
    it('should show loader when isLoading prop is present', () => {
        const { getByTestId } = render(<TodoItem isLoading />);

        const loader = getByTestId('is-loading')
        expect(loader).toBeInTheDocument();
    })
    it('should render with loadingCount prop correctly', () => {
        const loadingCount = 3;

        const { container } = render(<TodoItem 
            loadingCount={loadingCount}
        />);

        expect(container).toBeInTheDocument();
        expect(typeof loadingCount === 'number' &&
                loadingCount == 3).toBe(true)
        
    })
    it('should render a updateTodo function button', () => {
        const updateTodo = jest.fn();
      
        const { getByTestId } = render(
          <TodoItem updateTodo={updateTodo} />
        );
      
        fireEvent.click(getByTestId('update-todo'));
      
    })
    it('should render a updateStatusTodo function button', () => {
        const updateStatusTodo = jest.fn();
      
        const { getByTestId } = render(
          <TodoItem updateStatusTodo={updateStatusTodo} />
        );
      
        fireEvent.click(getByTestId('update-todo'));
      
    })
    it('should render a deleteTodo function button', () => {
        const deleteTodo = jest.fn();
      
        const { getByTestId } = render(
          <TodoItem deleteTodo={deleteTodo} />
        );
      
        fireEvent.click(getByTestId('delete-todo'));
      
    })
});

