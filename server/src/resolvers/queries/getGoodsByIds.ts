import { Goods, QueryGetGoodsByIdsArgs } from "../../../resolvers-types";
import { ContextPrisma } from "../../models";
import { goodsToExport } from "../../utils/goodsToExport.js";

export const getGoodsByIds = async(_, {ids}: QueryGetGoodsByIdsArgs, context): Promise<Goods[]> => {
    
    const prisma = context.prisma as ContextPrisma
    const locale = context?.headers?.locale || 'En' as String


    const goods = await prisma.goods.findMany({
        where: {
            id: {
                in: ids
            }
        },
        include: {
            category: true,
            goodsCharacteristic: {
                include: {
                    characteristic: true
                }
            }
        }
    })

    console.log(goods)

    return goods.map(goodsItem => goodsToExport(goodsItem, locale))
}
