import React from 'react';
import { mount } from 'cypress-react-unit-test';
import App from "../../App";
/// <reference types="cypress" />

import Chance from 'chance';
const chance = new Chance();

describe ('App', () => {

    const email = chance.email();
    const pass = 'ValidPassword23';

    it('renders learn react link', () => {
        mount(<App />);

        // beforeEach(() => {
        //     cy.visit('http://localhost:3001');
        // })

        cy.contains('Welcome to hear').should('be.visible');
    });

    it('blocks protected routes', () => {
        cy.get('#navToggle').click();
        cy.contains('App').click();

        cy.get('notification-message').children()
            .should('contain', 'You must be logged in!')
            .and('be visible')
    })

    it('successfully logs in a user', () => {

        cy.contains('Login').click();

        cy.url.should('include', 'login');

        cy.get('input[name=email]').type(email);
        cy.get('input[name=password]').type(pass);
        cy.get('button[type=submit]').click();
    });
});