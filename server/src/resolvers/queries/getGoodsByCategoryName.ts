
import { Prisma } from "@prisma/client";
import { Goods, GoodsPage, QueryGetGoodsByCategoryNameArgs } from "../../../resolvers-types";
import { ContextPrisma } from "../../models";
import { goodsToExport } from "../../utils/goodsToExport.js";

export const getGoodsByCategoryName = async(_, {categoryName, skip, take}: QueryGetGoodsByCategoryNameArgs, context): Promise<GoodsPage> => {
    
    const prisma = context.prisma as ContextPrisma
    const locale = context?.headers?.locale || 'En' as String

    console.log(categoryName)

    const query: Prisma.GoodsFindManyArgs = {
        skip,
        take,
        where: {
            category: {
                name_En: {
                    equals: categoryName,
                    mode: 'insensitive'
                }
            }
        },
        include: {
            category: true,
            goodsCharacteristic: {
                include: {
                    characteristic: true
                }
            },
            
        },
        
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
