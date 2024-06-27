import { gql } from "@apollo/client";

export const GET_GOODS_BY_URL = gql`
   query Query($url: String!) {
    getGoodsByUrl(url: $url) {
        id
        category {
            name
        }
        name
        description
        price
        sale
        photo
        count
        goodsUrlName
        goodsCharacteristic {
            id
            name
            value
        }
    }
}

`
