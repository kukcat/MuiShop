import { Characteristic, Goods, QueryGetGoodsByUrlArgs } from "../../../resolvers-types";
import { ContextPrisma } from "../../models";
import { charToExport } from "../../utils/charToExport.js";

export const getCharacteristic = async(_, {}, context): Promise<Characteristic[]> => {
    
    const prisma = context.prisma as ContextPrisma
    const locale = context?.headers?.locale || 'En' as String

    const char = await prisma.characteristic.findMany({
        
    })

    return char.map(char => charToExport(char, locale))
}
