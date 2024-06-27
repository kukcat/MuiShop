import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider as Apollo,
    HttpLink,
    ApolloLink,
    from
} from '@apollo/client'
import React from 'react'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'
import { HTTP, LOCALES } from '../utils/consts'
import i18n from '../utils/i18n'

interface Props {
    children: React.ReactNode
}

const ApolloProvider = ({ children } : Props) => {

    const languageCode = i18n.language.split('-')[0] as 'uk' | 'en';

    const link = createUploadLink({ uri: `${HTTP}/graphql` });
    // const httpLink = new HttpLink({uri: `http://${ipv4}:4000`})
    const localeMiddleware = new ApolloLink((operation, forward) => {
        operation.setContext(({headers = {}})=> ({
            headers: {
                ...headers,
                'apollo-require-preflight': 'true',
                'locale': Object.keys(LOCALES).includes(languageCode) ? LOCALES[languageCode] : 'En'
            }
        }))
        return forward(operation)
    })

    const client = new ApolloClient({
        link: from([localeMiddleware, link]),
        cache: new InMemoryCache(),
    })


    return (
        <Apollo client={client}>
            {children}
        </Apollo>

    )
}

export default ApolloProvider
