import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import { ENDPOINT, HASURA_SECRET_ID } from '../shared/constants'

Vue.use(VueApollo)

const httpLink =  createUploadLink({
   uri: ENDPOINT,
   headers: {
      'x-hasura-admin-secret': HASURA_SECRET_ID
   }
})

var apolloClient = new ApolloClient({
   link: httpLink,
   cache: new InMemoryCache({
      addTypename: false
   }),
 })

export const apolloProvider = new VueApollo({
   defaultClient: apolloClient
})