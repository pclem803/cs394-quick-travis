import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListPage from './ListPage';

it('test to make sure that the add button builds', ()=>{
    const propItems = [];
    const user = {
        displayName:'Philip Clement',
        email:"pclement803@gmail.com"
    };
    const house = 'someshit'

    const { getByTestId } = render(<ListPage propItems = {propItems} user={user} house={house}/>)

    expect(getByTestId('add-button').textContent).toBe('Add')
})

it('test to make sure that adding clears the product input', ()=>{
    const propItems = [];
    const user = {
        displayName:'Philip Clement',
        email:"pclement803@gmail.com"
    };
    const house = 'someshit'
    const { getByTestId } = render(<ListPage propItems = {propItems} user={user} house={house}/>)
    const productInput = getByTestId('productInput')
    fireEvent.change(productInput, {
        target: {value: 'anything'}
    });
    getByTestId('add-button').click()
    expect(productInput.value).toBe('')
})