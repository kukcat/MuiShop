import { gql } from "@apollo/client";

export const GET_ALLGOODS = gql`
    query Query($skip: Int, $take: Int) {
        getAllGoods(skip: $skip, take: $take) {
            goods {
                id
                name
                price
                photo
                goodsUrlName
            }
        }
}
`
