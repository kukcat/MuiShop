import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { GET_GOODS } from './queries'
import { Goods } from '../../models/good'
import {GoodsCard, LoadingPage} from '../../components'
import { Grid, Pagination, Typography } from '@mui/material'
import { useEasyTranslation } from '../../hooks/useEasyTranslate'
import { MAX_GOODS_ON_PAGE } from '../../utils/consts'


const CategoryPage = () => {

    const { category } = useParams()
    const [currentPage, setCurrentPage] = useState(1)
    const [prevCategory, setPrevCategory] = useState(category)
    const {t} = useEasyTranslation("Category")
    const {loading, data, error, networkStatus} = useQuery(GET_GOODS, {variables:
        {
            category, 
            skip: (currentPage-1)*MAX_GOODS_ON_PAGE, 
            take: MAX_GOODS_ON_PAGE
        }
        }) 
    
    if (prevCategory != category) {
        setCurrentPage(1)
        setPrevCategory(category)
    }


    if (loading) return <LoadingPage/>

    const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };
    

    const goods: Goods[] = data.getGoodsByCategoryName.goods
    const maxPage = Math.ceil(data.getGoodsByCategoryName.count/MAX_GOODS_ON_PAGE)

    return (
        <>
        
            {
                goods.length 
                ? 
                <Grid container justifyContent='center' spacing={2} pt={2}>
                    <Grid container spacing={2}>
                    {
                        goods.map((goods:Goods, index:number)=>(
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

export default CategoryPage