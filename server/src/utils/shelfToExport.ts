import { Category, Characteristic, Shelf } from "../../resolvers-types"



export const shelfToExport = (shelf: any, locale: string): Shelf => {
    return {
        ...shelf,
        name: shelf[`name_${locale}`]
    }
}