/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from '@testing-library/react';
import TextInput from './TextInput.component';

const utils = render(<TextInput />)
const input = utils.getByLabelText('todo-input') as HTMLInputElement

describe('TextInput', () => {
    it('should render with value prop correctly', () => {
        const { container } = render(<TextInput 
            value=''
        />);

        expect(container).toBeInTheDocument();
        expect(container).toHaveTextContent('');
    })
    it('should render with title prop correctly', () => {
        const { container } = render(<TextInput 
            label='todo'
        />);

        expect(container).toBeInTheDocument();
        expect(container).toHaveTextContent('todo');
    })
    it('should have an onChange prop', () => {

        fireEvent.change(input, {target: {value: 'testing'}})
        expect(input.value).toBe('testing')

    })
    it('should show loader when isLoading prop is present', () => {
        const { getByTestId } = render(<TextInput isLoading />);

        const loader = getByTestId('is-loading')
        expect(loader).toBeInTheDocument();
    })
})