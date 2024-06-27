import { Box, Typography, Button } from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'
// import { Autocomplete } from '../../../components'
import { useEasyTranslation } from '../../../hooks/useEasyTranslate'
import { Goods } from '../../../models/good'
import { Autocomplete } from '../../../components'

interface Props {
    data: Goods,
    currentGoods: Goods | null,
    setCurrentGoods: Dispatch<SetStateAction<Goods | null>>,
    handleOpenChange(): void,
    handleOpenAddGoods(): void,
    handleOpenAddCategory(): void
}

const GoodsMain = ({data, currentGoods, setCurrentGoods, handleOpenAddCategory, handleOpenAddGoods, handleOpenChange}: Props) => {

    const {t} = useEasyTranslation('Admin')

  return (
    <>
    <Box>
        <Typography fontSize={24}>{t("editGoods")}:</Typography>
        <Box display='flex' mt={2}>
          <Autocomplete
            width={{xs: '200px', md: '400px'}}
            data={data}
            value={currentGoods}
            setValue={setCurrentGoods}
            label={t('selectGoods')}
          />
          <Button onClick={handleOpenChange} variant='outlined' sx={{ml:2}}>{t("getGoods")}</Button>
        </Box>
      </Box>
      <Box mt={3}>
        <Typography fontSize={24} >{t("addGoods")}:</Typography>
        <Box display='flex' mt={2}>
          <Button onClick={handleOpenAddGoods} variant='outlined' sx={{height:"56px"}}>{t("addGoods")}</Button>
          {/* <Button  variant='outlined' sx={{height:"56px", ml: 2}}>{t("Admin.addVariantGoods")}</Button> */}
        </Box>
      </Box>
      <Box mt={3}>
        <Typography fontSize={24} >{t("categories")}:</Typography>
        <Box display='flex' mt={2}>
          <Button onClick={handleOpenAddCategory} variant='outlined' sx={{height:"56px"}}>{t("addCategory")}</Button>
          {/* <Autocomplete
            data={data?.getAllGoods}
            value={currentGoods}
            setValue={setCurrentGoods}
            label={t('selectGoods')}
          /> */}
          {/* <Button  variant='outlined' sx={{height:"56px", ml: 2}}>{t("changeCategory")}</Button> */}
        </Box>
      </Box>
    </>
  )
}

export default GoodsMain