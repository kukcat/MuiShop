import { gql } from "@apollo/client";

export const GET_GOODS_BY_IDS = gql`
   query Query($ids: [Int]!) {
    getGoodsByIds(ids: $ids) {
        id
        category {
            name
        }
        name
        price
        sale
        photo
        count
        goodsUrlName
    }
}

`
