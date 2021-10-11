import { render } from '@testing-library/react';
import React from 'react';
import { WebsiteComingSoon } from '../../../src/components/WebsiteComingSoon';

describe('WebsiteComingSoon', () => {
    const {getByText} = render(
        <WebsiteComingSoon />
    );

    it('should render the website coming soon component', () => {
        const header = getByText('Website Coming Soon!');
        const subHeader = getByText('Feel free to contact me at:');
        const email = getByText('dillon@ehrettrucking.com');

        expect(header).toBeDefined();
        expect(subHeader).toBeDefined();
        expect(email).toBeDefined();
    });
});