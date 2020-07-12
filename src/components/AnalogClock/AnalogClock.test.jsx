import React from 'react';
import { render } from '@testing-library/react';
import AnalogClock from './AnalogClock';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const date = new Date(2020, 11, 20, 10, 50, 55);
    const tree = renderer
        .create(<AnalogClock date={date} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders Clocks Editor', () => {
    const date = new Date(2020, 11, 20, 10, 50, 55);
    const { container } = render(<AnalogClock date={date} />);
    expect(container.firstChild).toHaveAttribute('class');
});
