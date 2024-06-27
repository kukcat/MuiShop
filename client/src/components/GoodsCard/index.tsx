import { Goods } from '../../models/good'
import { Box,  Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {  HTTP } from '../../utils/consts'
import { useEasyTranslation } from '../../hooks/useEasyTranslate'

interface Props {
    goods: Goods
}

const GoodsCard = ({goods}: Props) => {

  const navigate = useNavigate()
  const {t} = useEasyTranslation('Goods')


  const navigateTo = () => {
    navigate(`/goods/${goods.goodsUrlName}`)
  } 
  
  return (
    <Box>
      <Paper sx={{ width: '100%', height: 350 }}>
      <Box display='flex' justifyContent='center'>
        <img
          style={{width: '80%', height: '160px', marginTop: '16px', objectFit: 'cover', cursor: 'pointer' }}
          alt={goods.name}
          src={`${HTTP}/${goods.photo}`}
          onClick={navigateTo}
        />
      </Box>
      <Box p={2} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} sx={{height: '150px'}} >
        <Typography 
          gutterBottom 
          component="div" 
          sx={{ fontSize:'16px', lineHeight:'1.2', maxHeight:'120px', overflow: 'hidden', cursor: 'pointer'}}
          onClick={navigateTo}
        >
          {goods.name} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {goods.price}{t('currency')}
        </Typography>
      </Box>
    </Paper>
    </Box>
  )
}

export default GoodsCard