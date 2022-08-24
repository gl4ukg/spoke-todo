/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from '@testing-library/react';
import TodoWrapper from './TodoWrapper.component';

describe('TodoWrapper', () => {
    it('should render with title prop correctly', () => {
        const { container } = render(<TodoWrapper 
            title='To do list'
        />);

        expect(container).toBeInTheDocument();
        expect(container).toHaveTextContent('To do list');
    })
    it('should render with buttonTitle prop correctly', () => {
        const { container } = render(<TodoWrapper 
            buttonTitle='Create'
        />);

        expect(container).toBeInTheDocument();
        expect(container).toHaveTextContent('Create');
    })
    it('should render a buttonNavigation onClick function', () => {
        const buttonNavigation = jest.fn();
      
        const { getByTestId } = render(
          <TodoWrapper buttonNavigation={buttonNavigation} />
        );

        fireEvent.click(getByTestId('button-id'));
      
        expect(buttonNavigation).toHaveBeenCalled();
    })
    it('should render a iconNavigation onClick function', () => {
        const iconNavigation = jest.fn();
      
        const { getByTestId } = render(
          <TodoWrapper iconNavigation={iconNavigation} />
        );
      
        fireEvent.click(getByTestId('icon-navigate-id'));
      
        expect(iconNavigation).toHaveBeenCalled();
    })
    it('should render children prop', () => {
     
        
        const { getByTestId } = render(<TodoWrapper />);

        const children = getByTestId('list-children-id')
        
        expect(children).toBeDefined();

    })
});
