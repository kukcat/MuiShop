import React, { useContext } from 'react'
import { AppContext } from '../../Providers/AppContextProvider'
import GoodsSection from '../GoodsSection'
import { useEasyTranslation } from '../../hooks/useEasyTranslate'

const RecentlyViewedSection = () => {

  const {state} = useContext(AppContext)
  const {t} = useEasyTranslation('Goods')

  return (
  <>
  {
    state.recentViews.length 
    ? <GoodsSection 
        goods={state.recentViews}
        title={t('RecentViewed')}
      />
    : null
  }
  
  </>
  )
}

export default RecentlyViewedSection