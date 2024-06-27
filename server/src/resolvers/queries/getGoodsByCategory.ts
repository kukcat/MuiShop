import { Prisma } from "@prisma/client";
import { GoodsPage, QueryGetGoodsByCategoryArgs } from "../../../resolvers-types";
import { ContextPrisma } from "../../models";
import { goodsToExport } from "../../utils/goodsToExport.js";

export const getGoodsByCategory = async(_, {category, skip, take}: QueryGetGoodsByCategoryArgs, context): Promise<GoodsPage> => {
    
    const prisma = context.prisma as ContextPrisma
    const locale = context?.headers?.locale || 'En' as String

    const query: Prisma.GoodsFindManyArgs = {
        skip,
        take,
        where: {
            categoryID: category
        },
        include: {
            category: true,
            goodsCharacteristic: {
                include: {
                    characteristic: true
                }
            },
            _count: true
        }
    }

    const [goods, count] = await prisma.$transaction([
        prisma.goods.findMany(query),
        prisma.goods.count({
            where: query.where
        })
    ])


    return {
        goods: goods.map(goodsItem => goodsToExport(goodsItem, locale)),
        count
    }
}
