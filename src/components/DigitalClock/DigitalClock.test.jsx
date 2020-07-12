import React from 'react';
import { render } from '@testing-library/react';
import DigitalClock from './DigitalClock';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const date = new Date(2020, 11, 20, 10, 50, 55);
    const tree = renderer
        .create(<DigitalClock date={date} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders Digital Clock time', () => {
    const date = new Date(2020, 11, 20, 10, 50, 55);
    const { getByText } = render(<DigitalClock date={date} />);
    const hourElement = getByText(/10/i);
    expect(hourElement).toBeInTheDocument();

    const minutesElement = getByText(/50/i);
    expect(minutesElement).toBeInTheDocument();

    const secondsElement = getByText(/55/i);
    expect(secondsElement).toBeInTheDocument();
});
