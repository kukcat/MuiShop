import { Goods } from "../../resolvers-types"
import { categoryToExport } from "./categoryToExport.js"


export const goodsToExport = (goods: any, locale: string): Goods => {
    return {
        ...goods,
        category: categoryToExport(goods.category, locale),
        name: goods[`name_${locale}`],
        description: goods[`description_${locale}`],
        price: goods[`price_${locale}`],
        goodsCharacteristic: goods.goodsCharacteristic.map((goodsItem)=>({
            value: goodsItem[`value_${locale}`],
            value_En: goodsItem[`value_En`],
            value_Ua: goodsItem[`value_Ua`],
            name: goodsItem.characteristic[`name_${locale}`],
            id: goodsItem.id,
            characteristicId: goodsItem.characteristicId
        }))
    } as Goods
}