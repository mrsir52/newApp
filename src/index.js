import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Main from './Main';


const httpLink = new HttpLink({ uri: 'https://us-west-2.api.scaphold.io/graphql/snaksnorkels' })

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <Main />,
    </ApolloProvider>,

        document.getElementById('root'));

