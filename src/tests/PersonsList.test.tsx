import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { PersonsList } from '../components/PersonsList';
import { getUsers } from '../API/users';

    test('PersonList renders', () => {
        render(<PersonsList />)
    })

    test('loading data', async () => {
        const data = await getUsers().then(((user) => user));
        render(<PersonsList />)
        expect(data[1].name).toBe("Ervin Howell")            
        expect(data[3].email).toBe("Julianne.OConner@kory.org")            
    })

