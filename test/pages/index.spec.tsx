import { render } from '@testing-library/react';
import React from 'react';
import Home from '../../pages';

describe('Home', () => {
    const testRenderResult = render(
        <Home />
    );

    it('should render', () => {
        expect(testRenderResult).toBeDefined();
    });
});