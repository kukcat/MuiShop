import { Category, Characteristic } from "../../resolvers-types"



export const charToExport = (char: any, locale: string): Characteristic => {
    return {
        ...char,
        name: char[`name_${locale}`]
    }
}