/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { fireEvent, render } from '@testing-library/react';
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
        const { getByTestId } = render(<Button isIcon />);

        const isIcon = getByTestId('button-id').querySelector('span');
        expect(isIcon).toBeInTheDocument();
    })
    it('should render a onClick function button', () => {
        const onClick = jest.fn();
      
        const { getByTestId } = render(
          <Button onClick={onClick} />
        );
      
        fireEvent.click(getByTestId('button-id'));
      
        expect(onClick).toHaveBeenCalled();
    })
});


describe('button snapshots', () => {
    it('should render correctly with title value', () => {
        const { container } = render(<Button title='Create' isIcon={false}/>)

        expect(container.firstChild).toMatchSnapshot()
    });
})