import { CONTEXT_TYPES } from "../utils/consts"
import { Goods } from "./good"

export type State = {
    cartIds: number[],
    cart: Goods[],
    recentViewsIds: number[],
    recentViews: Goods[],
}

export type AppAction = 
 | {type: CONTEXT_TYPES.ADD_CART_ITEM, itemId: number, goods: Goods}
 | {type: CONTEXT_TYPES.REMOVE_CART_ITEM, itemId: number}
 | {type: CONTEXT_TYPES.ADD_VIEWS_ITEM, itemId: number, goods: Goods}
 | {type: CONTEXT_TYPES.SET_CARD_ITEM, itemIds: number[], goods: Goods[]}
 | {type: CONTEXT_TYPES.SET_VIEWS_ITEM, itemIds: number[], goods: Goods[]}

export type GlobalContext = {
    state: State,
    dispatch: React.Dispatch<AppAction>
}