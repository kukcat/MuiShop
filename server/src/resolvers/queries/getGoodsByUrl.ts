import { Goods, QueryGetGoodsByUrlArgs } from "../../../resolvers-types";
import { ContextPrisma } from "../../models";
import { goodsToExport } from "../../utils/goodsToExport.js";

export const getGoodsByUrl = async(_, {url}: QueryGetGoodsByUrlArgs, context): Promise<Goods> => {
    
    const prisma = context.prisma as ContextPrisma
    const locale = context?.headers?.locale || 'En' as String

    const goods = await prisma.goods.findFirst({
        where: {
            goodsUrlName: url
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

    return goodsToExport(goods, locale)
}
