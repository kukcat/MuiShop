import { QueryResolvers } from "../../../resolvers-types";
import { getAllGoods } from "./getAllGoods.js";
import { getBarCategory } from "./getBarCategory.js";
import { getCategories } from "./getCategories.js";
import { getCharacteristic } from "./getCharacteristic.js";
import { getGoodsByCategory } from "./getGoodsByCategory.js";
import { getGoodsByCategoryName } from "./getGoodsByCategoryName.js";
import { getGoodsById } from "./getGoodsById.js";
import { getGoodsByIds } from "./getGoodsByIds.js";
import { getGoodsByName } from "./getGoodsByName.js";
import { getGoodsByUrl } from "./getGoodsByUrl.js";
import { getShelves } from "./getShelves.js";

export const Query: QueryResolvers = {
    getGoodsByCategory,
    getGoodsByCategoryName,
    getAllGoods,
    getBarCategory,
    getShelves,
    getGoodsById,
    getGoodsByIds,
    getCategories,
    getGoodsByUrl,
    getCharacteristic,
    getGoodsByName
}