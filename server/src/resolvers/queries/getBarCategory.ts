import { Category } from "../../../resolvers-types";
import { ContextPrisma } from "../../models";
import { categoryToExport } from "../../utils/categoryToExport.js";

export const getBarCategory = async(_, {}, context): Promise<Category[]> => {
    
    const prisma = context.prisma as ContextPrisma
    const locale = context?.headers?.locale || 'En' as String

    const category = await prisma.category.findMany({
        where: {
            isOnBar: true
        },
    })
    console.log('categoryGetted')

    return category.map(cat => categoryToExport(cat, locale))
}
