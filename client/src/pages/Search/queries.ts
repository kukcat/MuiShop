import { gql } from "@apollo/client";

export const GET_GOODS_BY_NAME = gql`
   query Query($name: String!, $skip: Int, $take: Int) {
    getGoodsByName(name: $name, skip: $skip, take: $take) {
        goods{
            id
            name
            price
            photo
            goodsUrlName
        }
        count
    }
}

`
