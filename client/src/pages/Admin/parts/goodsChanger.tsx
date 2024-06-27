import Box from '@mui/material/Box';
import { Button, Divider, Grid, IconButton } from '@mui/material';
import { Form } from 'react-final-form';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_GOODS, CHANGE_GOODS, GET_CATEGORIES, GET_GOODS_BY_ID } from './queries';
import { FormInput, InputSelectCategory } from '../../../components/Inputs'; 
import { useEffect, useState } from 'react';
import { useEasyTranslation } from '../../../hooks/useEasyTranslate';
import CloseIcon from '@mui/icons-material/Close';
import FormCharacteristicsTable from '../../../components/FormCharacteristicsTable';
import { toadd } from './toadd';

interface Props {
  goodsId: number | undefined,
  handleClose(): void
}

export interface rowElement {
  id: number,
  characteristicId: number,
  value_En: string,
  value_Ua: string,
}
const defaultRows: rowElement[] = [{id: 0, characteristicId: -1, value_En: '', value_Ua: ''}]

export const GoodsChanger = ({goodsId, handleClose}: Props) => {

  const {t} = useEasyTranslation("Admin.goodsModal")
  const [file, setFile] = useState<File>()
  
  const { loading, error, data } = useQuery(goodsId ? GET_GOODS_BY_ID : GET_CATEGORIES, {
    variables: {id: goodsId}
  })
  
  const [chars, setChars] = useState<rowElement[]>(defaultRows)
  const [mutateGoods] = useMutation(goodsId ? CHANGE_GOODS : ADD_GOODS)
  
  
  useEffect(()=>{
    if(data?.getGoodsById) {
      setChars(data.getGoodsById.goodsCharacteristic)
    }
  }, [data])
  
  if (loading || error) return <></>

  const handleFileChange = (e: any) => {
    console.log(e.target.files[0])
    setFile(e.target.files[0]);
  };

  const onSubmit = (values: any) => {
    // addGoods(values)
    toadd.forEach((element)=>{
      addGoods(element)
    })
  }

  const addGoods = async (values: any) => {
    if (!file) return

    const charsToMutate = chars.map((char => {
      return {
        characteristicId: char.characteristicId,
        value_En: char.value_En,
        value_Ua: char.value_Ua,
      }
    }))

    await mutateGoods({
      variables:{
        data: {...values, sale: values.sale? values.sale : 0},
        img: file,
        chars: charsToMutate
    }
    })
    .then(({data})=>{
      console.log(data)
    })
    .catch(({e})=>{
      console.log(e)
    })
  }

  const updateGoods = async (values: any) => {
    const oldGoodsData = {
      ...data.getGoodsById,
      goodsCharacteristic: data.getCharacteristic
    }
    console.log(values, oldGoodsData)
    const charsToMutate = chars.map((char => {
      return {
        characteristicId: char.characteristicId,
        value_En: char.value_En,
        value_Ua: char.value_Ua,
      }
    }))

    await mutateGoods({
      variables:{
        data: {...values, sale: 0},
        img: file,
        chars: charsToMutate
    }
    })
    .then(({data})=>{
      console.log(data)
    })
    .catch(({e})=>{
      console.log(e)
    })
  }
  

  console.log(data)


  return (
        <Box pt={1}>
          <Box display={'flex'} justifyContent='flex-end'>
          <IconButton onClick={handleClose}>
            <CloseIcon/>
          </IconButton>
          </Box>
        <Form
        initialValues={data?.getGoodsById ? data?.getGoodsById : undefined}
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <Box>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Divider>{t('goodsName')}</Divider>
                </Grid>
                <Grid item container spacing={2} justifyContent='center'>
                  <Grid item xs={12} sm={6}>
                    <FormInput name='name_En' label={t("en")}/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormInput name='name_Ua' label={t("ua")}/>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Divider>{t('goodsDescription')}</Divider>
                </Grid>
                <Grid item container spacing={2} justifyContent='center'>
                  <Grid item xs={12} sm={6}>
                    <FormInput name="description_En" multiline rows={10} label={t("en")}/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormInput name="description_Ua" multiline rows={10} label={t("ua")}/>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Divider>{t('goodsPrice')}</Divider>
                </Grid>
                <Grid item container spacing={2} justifyContent='center'>
                  <Grid item xs={12} sm={6}>
                    <FormInput name="price_En" type='number' label={t("en")} startIcon='$'/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormInput name="price_Ua" type='number' label={t("ua")} startIcon='₴'/>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Divider>{t('goodsCategory')}</Divider>
                </Grid>
                <Grid item container spacing={2} justifyContent='center'>
                  <Grid item xs={12} sm={6}>
                    <InputSelectCategory label={t('goodsCategoryName')} items={data?.getCategories} name="category" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button variant='outlined' component="label" fullWidth sx={{height:"100%"}}>
                      {t('goodsUploadImage')}
                      <input className='upload' hidden type='file' onChange={handleFileChange}/>
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={12} >
                  <Divider>{t('goodsCharacteristics')}</Divider>
                </Grid>
              <Grid xs={12} item>
                <FormCharacteristicsTable 
                  data={chars}
                  setData={setChars}
                  chars={data?.getCharacteristic}
                />
              </Grid>
              <Grid item xs={12}>
                  <Button type='submit'>{goodsId ? t('buttonSubmitChange') : t('buttonSubmitAdd')}</Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        )}/>
        </Box>
  );
}
