import React, { useReducer, useEffect, createContext, useState } from 'react'
import { CONTEXT_TYPES, LOCAL_STORAGE_TYPES } from '../utils/consts'
import { getFromStorage } from '../utils/localStorage'
import { defaultContext } from '../utils/defaultContext'
import { useLazyQuery } from '@apollo/client'
import { LoadingPage } from '../components'
import { GlobalContext } from '../models/context'
import { GET_GOODS_BY_IDS } from './queries'
import { reducer } from '../utils/reducer'
import { Goods } from '../models/good'

interface Props {
    children: React.ReactNode
}

export const AppContext = createContext<GlobalContext>({
    state: defaultContext, 
    dispatch: ()=>(defaultContext)
})


export const AppContextProvider = ({children}: Props) => {
    
    const [state, dispatch] = useReducer(reducer, defaultContext)
    const [getGoodsByIds] = useLazyQuery(GET_GOODS_BY_IDS)
    const [gettedData, setGettedData] = useState(false)
    const value = { state, dispatch };
    
    useEffect(()=>{
        
        const cartIds = getFromStorage(LOCAL_STORAGE_TYPES.CART_ITEM) as number[]
        const viewsIds = getFromStorage(LOCAL_STORAGE_TYPES.VIEWS_ITEM) as number[]

        let finalGoods: number[] = []

        if (cartIds) finalGoods = [...cartIds]
        if (viewsIds) finalGoods = [...finalGoods, ...viewsIds]

        
        if (finalGoods.length) {


            getGoodsByIds({variables: {ids: finalGoods}})
            .then((data) => {
                

                if (cartIds) {

                    dispatch({
                        type: CONTEXT_TYPES.SET_CARD_ITEM,
                        itemIds: cartIds,
                        goods: data.data.getGoodsByIds.filter((goods: Goods) => cartIds.includes(goods.id as number))
                    })
                }

                if (viewsIds) {

                    dispatch({
                        type: CONTEXT_TYPES.SET_VIEWS_ITEM,
                        itemIds: viewsIds,
                        goods: data.data.getGoodsByIds.filter((goods: Goods) => viewsIds.includes(goods.id as number))
                    })
                }

                setGettedData(true)
            })
                       
        } else {
            setGettedData(true)
        }
    }, [])
    
    if (!gettedData) return <LoadingPage/>

    
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
