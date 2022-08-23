import { render, screen } from '@testing-library/react';
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
    it('should render with navigate prop correctly', () => {
        const { container } = render(<TodoWrapper 
            // navigate={}
        />);

        expect(container).toBeInTheDocument();
    })
    it('should render a div with the class of list-wrapper', () => {
        render(<TodoWrapper 
            title='Create'
            buttonTitle='Create'
            />)
        expect(screen.getByTestId('list-wrapper-id')).toHaveClass('list-wrapper')
    })
 
});
