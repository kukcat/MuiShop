export type Goods = {
    id?: number,
    category?: Category,
    categoryID?: number,
    name?: string,
    description?: string,
    price?: string,
    sale?: number,
    photo?: string,
    createDateTime?: Date,
    count?: number,
    isShown?: boolean,
    goodsCharacteristic?: goodsCharacteristic[],
    goodsUrlName?: string
}

export type goodsCharacteristic = {
    id: number,
    name: string,
    value: string,
}

export type Category = {
    id?: number,
    name?: string,
    isOnBar?: boolean, 
    goods?: string
}