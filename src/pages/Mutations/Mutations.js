import { gql } from 'apollo-boost';

export const LOGIN = gql`
    mutation($enrollNumber: String!, $password: String!) {
        login(enrollNumber: $enrollNumber, password: $password) {
            success
            token
            errors
        }
    }`;