import React, { useContext } from 'react'
import { Goods } from '../../models/good'
import { Grid, IconButton, Paper, Typography } from '@mui/material'
import { CONTEXT_TYPES, HTTP } from '../../utils/consts'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import { useEasyTranslation } from '../../hooks/useEasyTranslate'
import { AppContext } from '../../Providers/AppContextProvider'

interface Props {
    goods: Goods
    setDrawer(state: boolean): void 
  } 

const CartGoodsCard = ({goods, setDrawer}: Props) => {

  const navigate = useNavigate()
  const {t} = useEasyTranslation('Goods')
  const {dispatch} = useContext(AppContext)

  const navigateTo = () => {
    navigate(`/goods/${goods.goodsUrlName}`)
    setDrawer(false)
  } 

  const removeCartItem = () => {
    dispatch({
      type: CONTEXT_TYPES.REMOVE_CART_ITEM,
      itemId: goods.id as number
    })
  }

  const priceColor = goods.count ? 'green' : 'red' 

  return (
    <Paper sx={{m:'0px 16px', height: '150px', maxWidth: '100%', overflow: 'hidden'}}>
      <Grid container >
      <Grid item xs={4} onClick={navigateTo} sx={{cursor: 'pointer'}}>
          <img 
            style={{width: '100%', height: '150px', objectFit: 'cover' }} 
            src={`${HTTP}/${goods.photo}`} 
            alt={goods.name} 
          />
        </Grid>
        <Grid item container xs={8}>
          <Grid item p={1} xs={10} sx={{height: '115px'}}>
            <Typography fontSize='15px'>
            {goods.name}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton onClick={removeCartItem}>
              <CloseIcon/>
            </IconButton>
          </Grid>
          <Grid item xs={5}>
            <Typography pl={1} sx={{textDecoration: goods.count ? 'none' : 'line-through'}}>
              {goods.price}{t('currency')}
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography color={priceColor}>
              {goods.count
                ? t('available')
                : t('notAvailable')
              }
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default CartGoodsCard