import { render, screen } from '@testing-library/react';
import Button from './Button.component';

describe('button', () => {
    it('should render with title prop correctly', () => {
        const { container } = render(<Button 
            title='Create'
            isIcon={true}
        />);

        expect(container).toBeInTheDocument();
        expect(container).toHaveTextContent('Create');
    })
    it('should render with isIcon prop correctly', () => {
        const { container } = render(<Button 
            title='Create'
            isIcon={true}
        />);

        expect(container).toBeInTheDocument();
        // expect(container).toHave
    })
    it('should render a button class of button', () => {
        render(<Button 
            title='Create'
            isIcon={true}
            />)
        expect(screen.getByTestId('button-id')).toHaveClass('button')
    })
    // it('should have img element when isIcon prop is present with isIcon as src and alt', () => {
    //     const { container } = render(<Button 
    //         text='Create'
    //         isIcon='photo'
    //     />);
    //     const imgElement = container.getElementsByTagName('img')[0];


    //     expect(container).toBeInTheDocument();
    //     expect(imgElement).toHaveAttribute('src', 'photo');
    //     expect(imgElement).toHaveAttribute('alt', 'photo');
    // })

    // it('should have given class name when class name prop is present', () => {
    //     const { container } = render(<Button 
    //         title='Create'
    //         isIcon={false}
    //         className='button'
    //     />);
        
    //     expect(container).toBeInTheDocument();
    //     expect(container.firstChild).toHaveClass('button');
    // })
});


describe('button snapshots', () => {
    it('should render correctly with title value', () => {
        const { container } = render(<Button title='Create' isIcon={false}/>)

        expect(container.firstChild).toMatchSnapshot()
    });
})