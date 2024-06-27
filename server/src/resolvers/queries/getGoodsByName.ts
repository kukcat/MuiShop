import { Prisma } from "@prisma/client";
import { Goods, GoodsPage, QueryGetGoodsByNameArgs } from "../../../resolvers-types";
import { ContextPrisma } from "../../models";
import { goodsToExport } from "../../utils/goodsToExport.js";

export const getGoodsByName = async(_, {name, skip, take}: QueryGetGoodsByNameArgs, context): Promise<GoodsPage> => {
    
    const prisma = context.prisma as ContextPrisma
    const locale = context?.headers?.locale || 'En' as String

    const query: Prisma.GoodsFindManyArgs = {
        skip,
        take,
        where: {
            OR: [
                {
                    name_En: {
                        contains: name,
                        mode: 'insensitive'
                    }
                },
                {
                    name_Ua: {
                        contains: name,
                        mode: 'insensitive'
                    }
                }
            ]
        },
        include: {
            category: true,
            goodsCharacteristic: {
                include: {
                    characteristic: true
                }
            }
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
