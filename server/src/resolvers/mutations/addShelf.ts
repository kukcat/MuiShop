import { MutationAddShelfArgs, ResolverTypeWrapper } from "../../../resolvers-types";
import { ContextPrisma } from "../../models";

export const addShelf = async(_, params: MutationAddShelfArgs, context): Promise<ResolverTypeWrapper<string>> => {
    
    const prisma = context.prisma as ContextPrisma

    const result = await prisma.shelf.create({
        data: {
            ...params,
        }
    }).then(()=>{
        return "200"
    }).catch((e)=>{
        return e
    })

    return result
}
