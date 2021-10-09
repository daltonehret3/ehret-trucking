import { NavBar } from "../../../src/components/NavBar";
import {render} from '@testing-library/react';
import React from 'react';

describe('NavBar', () => {
    const {getByText} = render(
        <NavBar />
    );

    it('should render the headers of the NavBar', () => {
        const homeLink = getByText('Home');
        const aboutLink = getByText('About');

        expect(homeLink).toBeDefined();
        expect(aboutLink).toBeDefined();
    })
})