import { Goods, QueryGetGoodsByIdArgs } from "../../../resolvers-types";
import { ContextPrisma } from "../../models";
import { goodsToExport } from "../../utils/goodsToExport.js";

export const getGoodsById = async(_, {id}: QueryGetGoodsByIdArgs, context): Promise<Goods> => {
    
    const prisma = context.prisma as ContextPrisma
    const locale = context?.headers?.locale || 'En' as String

    const goods = await prisma.goods.findFirst({
        where: {
            id
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

    // console.log(goods)

    return goodsToExport(goods, locale)
}
