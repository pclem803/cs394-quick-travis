import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListPage from './ListPage';

it('test to make sure that the add button builds', ()=>{
    const propItems = [];
    const user = {any:'object'}
    const house = {any:'object'}
    const testFunction = jest.fn()

    const { getByTestId } = render(<ListPage propItems = {propItems} user={user} house={house}/>)

    expect(getByTestId('add-button').textContent).toBe('Add')

})