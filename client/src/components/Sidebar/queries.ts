import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
query ExampleQuery {
    getBarCategory {
    id
    name
    url
  }
}`
