import { render } from '@testing-library/react';
import React from 'react';
import Footer from '../../../src/components/Footer';

describe('Footer', () => {
    const {getByText} = render(
        <Footer />
    );

    it('should render the materials hauled', () => {
        const materialsHauled = getByText('Materials Hauled');
        const gravel = getByText('Gravel');
        const sand = getByText('Sand');
        const dirt = getByText('Dirt');
        const asphalt = getByText('Asphalt');
        const recycledConcrete = getByText('Recycled Concrete');

        expect(materialsHauled).toBeDefined();
        expect(gravel).toBeDefined();
        expect(sand).toBeDefined();
        expect(dirt).toBeDefined();
        expect(asphalt).toBeDefined();
        expect(recycledConcrete).toBeDefined();
    });

    it('should render the contact info', () => {
        const contact = getByText('Contact');
        const cell = getByText('Cell:> (641) 226-7708');
        const email = getByText('Email: dillon@ehretTrucking.com');

        expect(contact).toBeDefined();
        expect(cell).toBeDefined();
        expect(email).toBeDefined();
    });
});