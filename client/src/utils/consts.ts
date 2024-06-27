
const PORT = process.env.PORT || 4000 
export const HTTP = `http://192.168.31.202:${PORT}`
export const MAX_RECENT_VIEWS_ELEMENTS = 10
export const MAX_GOODS_ON_PAGE = 12
export enum CONTEXT_TYPES {
    ADD_CART_ITEM,
    REMOVE_CART_ITEM,
    ADD_VIEWS_ITEM,
    SET_CARD_ITEM,
    SET_VIEWS_ITEM
}

export enum LOCAL_STORAGE_TYPES {
    CART_ITEM,
    VIEWS_ITEM
}

export const LOCALES: Locales = {
    'uk': "Ua",
    'en': "En"
} 

interface Locales {
    uk: string,
    en: string
}