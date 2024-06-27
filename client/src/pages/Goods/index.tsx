import { useQuery } from '@apollo/client'
import React, { memo, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEasyTranslation } from '../../hooks/useEasyTranslate'
import { GET_GOODS_BY_URL } from './queries'
import { Button, Divider, Grid, Typography } from '@mui/material'
import { Goods } from '../../models/good'
import { GoodsCharTable, GoodsSection, LoadingPage, RecentlyViewedSection } from '../../components'
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { AppContext } from '../../Providers/AppContextProvider'
import { CONTEXT_TYPES, HTTP } from '../../utils/consts'
import CheckIcon from '@mui/icons-material/Check';

const GoodsPage = () => {


    const { url } = useParams()
    const {t} = useEasyTranslation("Goods")
    const {loading, data, error, networkStatus} = useQuery(GET_GOODS_BY_URL, {variables: {url}}) 
    const {state, dispatch} = useContext(AppContext)
    
    useEffect(()=>{
      window.scrollTo(0,0)
      if(data){
        dispatch({
          type: CONTEXT_TYPES.ADD_VIEWS_ITEM,
          itemId: goods.id as number,
          goods 
        })
      }
    }, [data])

    if (loading) return <LoadingPage/>
    
    const goods: Goods = data?.getGoodsByUrl
    if (!goods) return <LoadingPage/>
    
    const onAddCartButtonClick = () => {
      dispatch({
        type: CONTEXT_TYPES.ADD_CART_ITEM,
        itemId: goods.id as number,
        goods
      })
    }
    
    const onRemoveCartButtonClick = () => {
      dispatch({
        type: CONTEXT_TYPES.REMOVE_CART_ITEM,
        itemId: goods.id as number
      })
    }
    
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{fontSize: {xs: 20, md: 28}, textAlign:'justify'}} lineHeight='1.2'>{goods.name}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img 
            src={`${HTTP}/${goods.photo}`}
            style={{width: '100%'}}
          />
        </Grid>
        <Grid item container spacing={1} xs={12} sm={6} pl={2} alignContent={'flex-start'}>
          <Grid item xs={12}>
            <Typography sx={{fontSize: {xs: 18, md: 24},textAlign:'justify'}} lineHeight='1'>{goods.description}</Typography>
          </Grid>
          <Grid item xs={12}><Divider/></Grid>
          <Grid container item xs={12} alignItems={'center'}>
            <Grid item xs={6}>
              <Typography fontSize={24} p={1}>{goods.price}{t('currency')}</Typography>
            </Grid>
            <Grid item xs={6}>
              {!state.cartIds.includes(goods.id as number)
              ? <Button 
                  variant='outlined' 
                  disabled={!goods.count}
                  onClick={onAddCartButtonClick}
                  startIcon={<AddShoppingCartSharpIcon/>}
                  sx={{width: '150px'}}
                >
                  {t('buyButton')}
              </Button>
              : <Button 
                  variant='contained' 
                  disabled={!goods.count}
                  onClick={onRemoveCartButtonClick}
                  startIcon={<CheckIcon/>}
                  color='success'
                  sx={{width: '150px'}}
                >
                  {t('buyButtonInCart')}
                </Button>
              }
            </Grid>
            <Grid item xs={12}>
              
              {goods.count
                ? <Typography pl={1} color={'green'}> {t('available')} </Typography>
                : <Typography pl={1} color={'red'}> {t('notAvailable')} </Typography>
              }
              
            </Grid>
          </Grid>
          <Grid item xs={12}><Divider/></Grid>

        </Grid>
        <Grid item container xs={12} pt={2}>
          <GoodsCharTable chars={goods.goodsCharacteristic}/>
        </Grid>
        <Grid item xs={12} pt={2}>
          <RecentlyViewedSection/>
        </Grid>
      </Grid>
    )
}

export default memo(GoodsPage)