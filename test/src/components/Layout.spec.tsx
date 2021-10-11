import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import Layout from '../../../src/components/Layout';
import { COMPANY_NAME } from '../../../src/constants/companyName';

describe('Layout', () => {
    let testRenderResult: RenderResult;

    beforeEach(() => {
        testRenderResult = render(
            <Layout children={null}/>
        );
    });

    it('should render the header component', () => {
        const header = testRenderResult.getByText(COMPANY_NAME);

        expect(header).toBeDefined();
    });

    it('should render the footer component', () => {
        const footer = testRenderResult.getByText('Materials Hauled');

        expect(footer).toBeDefined();
    });
});