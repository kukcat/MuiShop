import { State, AppAction } from "../models/context"
import { CONTEXT_TYPES, LOCAL_STORAGE_TYPES, MAX_RECENT_VIEWS_ELEMENTS } from "./consts"
import { setLocalStorage } from "./localStorage"

export const reducer = (state: State, action: AppAction): State => {    
    switch (action.type) {

        case CONTEXT_TYPES.ADD_CART_ITEM:{
            if (state.cartIds.includes(action.itemId)) return state
            const updatedIds = [...state.cartIds, action.itemId]
            const updatedCart = [...state.cart, action.goods]
            setLocalStorage(LOCAL_STORAGE_TYPES.CART_ITEM, updatedIds)
            return {...state, cartIds: updatedIds, cart: updatedCart}
        }
            

        case CONTEXT_TYPES.REMOVE_CART_ITEM: {
            const updatedIds = state.cartIds.filter(id => id != action.itemId)
            const updatedCart = state.cart.filter(goods => goods.id != action.itemId)
            setLocalStorage(LOCAL_STORAGE_TYPES.CART_ITEM, updatedIds)
            return {...state, cartIds: updatedIds, cart: updatedCart}
        }
            

        case CONTEXT_TYPES.ADD_VIEWS_ITEM: {
            if (state.recentViewsIds.includes(action.itemId)) return state
            const updatedIds = [action.itemId, ...state.recentViewsIds]
            const updatedCart = [action.goods, ...state.recentViews]
            if (state.recentViews.length >= MAX_RECENT_VIEWS_ELEMENTS){
                updatedCart.pop()
                updatedIds.pop()
            }
            setLocalStorage(LOCAL_STORAGE_TYPES.VIEWS_ITEM, updatedIds)
            return {...state, recentViewsIds: updatedIds, recentViews: updatedCart}  
        }
        
        case CONTEXT_TYPES.SET_CARD_ITEM: {
            return {...state, cart: action.goods, cartIds: action.itemIds}
        }
           
        case CONTEXT_TYPES.SET_VIEWS_ITEM: {
            return {...state, recentViews: action.goods, recentViewsIds: action.itemIds}
        }

        default:
            throw new Error('Incorrect dispatch type')
        }  
        
}