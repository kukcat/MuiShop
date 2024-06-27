import { gql } from "@apollo/client";

export const GET_GOODS = gql`
  query ExampleQuery {
  getAllGoods {
    goods{
      id
      label:name
    }
  }
}
`
