import { Box, Grid, Typography } from '@mui/material'
import { Goods } from '../../models/good'
import { ThemedSwiper } from '../ThemedSwiper'
import { SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css';
import { GoodsCard } from '..'

interface Props {
  title: string,
  goods: Goods[]
}

const GoodsSection = ({title, goods}: Props) => {


  return (
    <Box mt={2}>
      <Typography sx={{fontSize: '36px'}}>{title}</Typography>
      <ThemedSwiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView='auto'
        navigation
      >
        {goods.map((goods, index)=>(
          <SwiperSlide key={index} style={{width: 'auto'}}>
            <Box sx={{width: "200px"}}>
              <GoodsCard goods={goods}/>
            </Box>
          </SwiperSlide>
        ))}
      </ThemedSwiper>
    </Box>
  )
}

export default GoodsSection