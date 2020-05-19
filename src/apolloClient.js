import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';

const httpLink = new HttpLink({ uri: 'http://localhost:5000/graphql' })

const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            "x-token": localStorage.getItem('token') || null,
        }
    });
    return forward(operation);
})


const authAfterware = new ApolloLink((operation, forward) => {
    return forward(operation).map(response => {
        const context = operation.getContext();
        const { response: { headers } } = context;
        if (headers) {
            const token = headers.get("x-token");

            if (token) {
                localStorage.setItem("token", token);
            }

        }

        if (response.errors && response.errors.length) {
            if (response.errors[0].message === "No Autenticado") {
                localStorage.removeItem('token');
                localStorage.removeItem('id');
                localStorage.removeItem('name');
                localStorage.removeItem('lastnames');
                localStorage.removeItem('universityId');
                localStorage.removeItem('universityName');
                localStorage.removeItem('city');
                localStorage.removeItem('photo');
                localStorage.removeItem('raiting');
                localStorage.removeItem('enrollNumber');
                window.location = "/login";
            }
        }

        return response;
    });
});


export const client = new ApolloClient({
    link: authAfterware.concat(authMiddleware.concat(httpLink)),
    cache: new InMemoryCache()
});