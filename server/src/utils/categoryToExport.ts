import { Category } from "../../resolvers-types"



export const categoryToExport = (category: any, locale: string): Category => {
    return {
        ...category,
        name: category[`name_${locale}`]
    }
}