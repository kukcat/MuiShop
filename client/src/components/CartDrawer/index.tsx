import { Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import React, { memo, useContext } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useEasyTranslation } from '../../hooks/useEasyTranslate';
import CartGoodsCard from '../CartGoodsCard';
import { Scrollbar } from 'react-scrollbars-custom';
import { AppContext } from '../../Providers/AppContextProvider';

const CartDrawer = () => {

 const [open, setOpen] = React.useState(false);
 const {t} = useEasyTranslation('Header.cartDrawer')
 const {state} = useContext(AppContext)
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  
  return (
    <>
        <IconButton sx={{ml:2, color: '#fff'}} onClick={toggleDrawer(true)}>
            <ShoppingCartOutlinedIcon/>
        </IconButton>
        <Drawer sx={{width: {xs: '100vw', md: '450px'} }} open={open} onClose={toggleDrawer(false)} anchor='right'>
            <IconButton sx={{position:"absolute", top: '16px', right: '16px', display: {xs: 'block', sm: 'none'}}}  onClick={toggleDrawer(false)}>
              <CloseIcon/>
            </IconButton>
            <Box role="presentation" onClick={toggleDrawer(false)}>
                <Typography fontSize={24} mt={2} textAlign={'center'}>
                    {state.cart.length 
                    ? t('cart')
                    : t('emptyCart')
                    }
                </Typography>
                
            </Box>
            <Box sx={{height:'89%', width: {xs: '100vw', sm: '450px'} }}>
            <Scrollbar style={{width: '100%'}}>
                {
                  state.cart.map((goods)=>(
                    <Box key={goods.id} mt={1}>
                      <CartGoodsCard setDrawer={setOpen} goods={goods} />
                    </Box>
                  ))
                }
            </Scrollbar>
            </Box>
            <Box display='flex' justifyContent='center'>
              {state.cart.length 
                ? <Button color='success' variant='contained' sx={{fontSize: "16px"}}>
                    {t('buy')}
                  </Button>
                : null  
            }
            </Box>
        </Drawer>
    </>
  )
}

export default memo(CartDrawer)