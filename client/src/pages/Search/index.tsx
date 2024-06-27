import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { GET_GOODS_BY_NAME } from './queries'
import { Box, Grid, Pagination, Typography } from '@mui/material'
import { LoadingPage, GoodsCard } from '../../components'
import { Goods } from '../../models/good'
import { useEasyTranslation } from '../../hooks/useEasyTranslate'
import { MAX_GOODS_ON_PAGE } from '../../utils/consts'

const SearchPage = () => {

    const { findString } = useParams()
    const {t} = useEasyTranslation('Category')
    const [currentPage, setCurrentPage] = useState(1)
    const {data, loading} = useQuery(GET_GOODS_BY_NAME, {variables: 
        {
            name: findString, 
            skip: (currentPage-1)*MAX_GOODS_ON_PAGE, 
            take: MAX_GOODS_ON_PAGE
        }})
    
    const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    if (loading) return <LoadingPage/>

    const goods: Goods[] = data.getGoodsByName.goods
    const maxPage = Math.ceil(data.getGoodsByName.count/MAX_GOODS_ON_PAGE)

    return (
        <>
        
            {
                goods.length 
                ? 
                <Grid container justifyContent='center' spacing={2} pt={2}>
                    <Grid container spacing={2}>
                        {
                            goods.map((goods: Goods, index:number)=>(
                                <Grid item xs={6} sm={4} lg={3} xl={2} key={index}>
                                    <GoodsCard
                                        
                                        goods={goods}
                                    />
                                </Grid>
                                ))
                        }
                    </Grid>
                    <Grid item><Pagination count={maxPage} page={currentPage} onChange={onPageChange} /></Grid>
                </Grid>
                
                : <Typography>{t('zeroGoods')}</Typography>
            }

        </>
    )
}

export default SearchPage