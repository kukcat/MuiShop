import { gql } from "@apollo/client";

export const ADD_CATEGORY = gql`
mutation Mutation($name_En: String!, $name_Ua: String!, $isOnBar: Boolean!) {
  addCategory(name_En: $name_En, name_Ua: $name_Ua, isOnBar: $isOnBar)
}`