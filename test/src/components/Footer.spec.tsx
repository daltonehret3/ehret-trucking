import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import Footer from '../../../src/components/Footer';

describe('Footer', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
        renderResult = render(
            <Footer />
        );
    });

    it('should render the materials hauled', () => {
        const materialsHauled = renderResult.getByText('Materials Hauled');
        const gravel = renderResult.getByText('Gravel');
        const sand = renderResult.getByText('Sand');
        const dirt = renderResult.getByText('Dirt');
        const asphalt = renderResult.getByText('Asphalt');
        const recycledConcrete = renderResult.getByText('Recycled Concrete');

        expect(materialsHauled).toBeDefined();
        expect(gravel).toBeDefined();
        expect(sand).toBeDefined();
        expect(dirt).toBeDefined();
        expect(asphalt).toBeDefined();
        expect(recycledConcrete).toBeDefined();
    });

    it('should render the contact info', () => {
        const contact = renderResult.getByText('Contact');
        const cell = renderResult.getByText('(641) 226-7708');
        const email = renderResult.getByText('dillon@ehretTrucking.com');

        expect(contact).toBeDefined();
        expect(cell).toBeDefined();
        expect(email).toBeDefined();
    });
});