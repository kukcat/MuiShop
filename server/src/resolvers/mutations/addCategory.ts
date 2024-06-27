import { MutationAddCategoryArgs, ResolverTypeWrapper } from "../../../resolvers-types";
import { ContextPrisma } from "../../models";

export const addCategory = async(_, params: MutationAddCategoryArgs, context): Promise<ResolverTypeWrapper<string>> => {
    
    console.log(params)

    const prisma = context.prisma as ContextPrisma

    const result = await prisma.category.create({
        data: {
            ...params,
            url: params.name_En.replace(/[^\s\w\-().]/g, '').replace(/\s/g, '_')
        }
    }).then(()=>{
        return "200"
    }).catch((e)=>{
        return e
    })

    return result
}
