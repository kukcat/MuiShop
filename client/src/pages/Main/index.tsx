import React from 'react'
import {Banner, GoodsSection, LoadingPage, RecentlyViewedSection } from '../../components'
import { Goods } from '../../models/good'
import { useQuery } from '@apollo/client'
import { GET_ALLGOODS } from './queries'

const MainPage = () => {

  const {data, loading, error} = useQuery(GET_ALLGOODS, {
    variables: {
      take: 10
    }
  })

  if (loading || error) return <LoadingPage/>

  return (
    <>
      
      <Banner/>
      <GoodsSection title={'Товари'} goods={data.getAllGoods.goods}/>
      <RecentlyViewedSection/>
    </>
  )
}

export default MainPage