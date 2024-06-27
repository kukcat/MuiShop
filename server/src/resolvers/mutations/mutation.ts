import { MutationResolvers } from "../../../resolvers-types"
import { addCategory } from "./addCategory.js"
import { addGoods } from "./addGoods.js"
import { addShelf } from "./addShelf.js"
import { updateGoods } from "./updateGoods.js"

export const Mutation: MutationResolvers = {
   addCategory,
   addGoods,
   addShelf,
   updateGoods
}