import { gql } from "@apollo/client";

export const GET_GOODS = gql`
   query Query($category: String!, $skip: Int, $take: Int) {
    getGoodsByCategoryName(categoryName: $category, skip: $skip, take: $take) {
        goods {
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
