import { Prisma } from "@prisma/client";
import { Goods, GoodsPage, QueryGetAllGoodsArgs } from "../../../resolvers-types";
import { ContextPrisma } from "../../models";
import { goodsToExport } from "../../utils/goodsToExport.js";

export const getAllGoods = async(_, {skip, take}: QueryGetAllGoodsArgs, context): Promise<GoodsPage> => {

    const prisma = context.prisma as ContextPrisma
    const locale = context?.headers?.locale || 'En' as String

    const query: Prisma.GoodsFindManyArgs = {
        skip,
        take,
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
