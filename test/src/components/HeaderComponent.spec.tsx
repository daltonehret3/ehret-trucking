import { render } from '@testing-library/react';
import React from 'react';

import {HeaderComponent} from '../../../src/components/HeaderComponent';
import { COMPANY_NAME } from '../../../src/constants/companyName';

describe('HeaderComponent', () => {
    const {getByText} = render(
        <HeaderComponent />
    );

    it('should render the header text', () => {
        const header = getByText(COMPANY_NAME);

        expect(header).toBeDefined();
    })
});