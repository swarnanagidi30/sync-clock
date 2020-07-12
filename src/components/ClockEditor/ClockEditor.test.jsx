import React from 'react';
import { render } from '@testing-library/react';
import ClockEditor from './ClockEditor';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const date = new Date(2020, 11, 20, 10, 50, 55);
    const tree = renderer
        .create(<ClockEditor date={date} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders Clocks Editor', () => {
    const date = new Date(2020, 11, 20, 10, 50, 55);
    const { getByText } = render(<ClockEditor date={date} />);
    const hElement = getByText(/Edit Time/i);
    expect(hElement).toBeInTheDocument();
});
