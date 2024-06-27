import { gql } from "@apollo/client";

export const GET_GOODS_BY_ID = gql`
query ExampleQuery($id: Int!) {
  getGoodsById(id: $id) {
    category :categoryID
    description
    id
    name
    price
    sale
    photo
  }
  getCategories {
    name
    id
  }
}`

export const GET_CATEGORIES = gql`
query GetCategories {
  getCategories {
    name
    id
  }
}
`

export const ADD_GOODS = gql`
mutation Mutation($data: AddGoodsInput!, $img: Upload!) {
  addGoods(data: $data, img: $img)
}
`