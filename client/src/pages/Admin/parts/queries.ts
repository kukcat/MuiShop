import { gql } from "@apollo/client";

export const GET_GOODS_BY_ID = gql`
query ExampleQuery($id: Int!) {
  getGoodsById(id: $id) {
    category :categoryID
    id
    name_Ua
    name_En
    description_Ua
    description_En
    price_Ua
    price_En
    sale
    photo
    count
    goodsUrlName
    goodsCharacteristic {
      id
      characteristicId
      value_En
      value_Ua
    }
  }
  getCategories {
    name
    id
  }


  getCharacteristic {
    id
    name_Ua
    name_En
  }
}
`

export const GET_CATEGORIES = gql`
query GetCategories {
  getCategories {
    name
    id
  }

  
  getCharacteristic {
    id
    name_Ua
    name_En
  }
}

`

export const ADD_GOODS = gql`
mutation Mutation($data: AddGoodsInput!, $img: Upload!, $chars: [GoodsInputChars]) {
  addGoods(data: $data, img: $img, chars: $chars)
}
`

export const CHANGE_GOODS= gql`
mutation Mutation($data: updateGoodsInput!, $img: Upload, $chars: [updateGoodsInputChars]) {
  updateGoods(data: $data, img: $img, chars: $chars)
}
`