import { Shelf } from "../../../resolvers-types";
import { ContextPrisma } from "../../models";
import { shelfToExport } from "../../utils/shelfToExport.js";

export const getShelves = async(_, {}, context): Promise<Shelf[]> => {
    
    const prisma = context.prisma as ContextPrisma
    const locale = context?.headers?.locale || 'En' as String

    const shelf = await prisma.shelf.findMany()

    return shelf.map(shelf => shelfToExport(shelf, locale))
}
