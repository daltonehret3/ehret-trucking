import { render } from '@testing-library/react';
import React from 'react';
import About from '../../pages/about';

describe('About', () => {
    const {getByText} = render(
        <About />
    );

    it('should render the About page', () => {
        const about = getByText('About Me Page');

        expect(about).toBeDefined();
    });
});