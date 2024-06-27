import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, Divider, Grid } from '@mui/material';
import { useEasyTranslation } from '../../hooks/useEasyTranslate';
import { Form } from 'react-final-form';
import { FormInput } from '../Inputs';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_GOODS, GET_CATEGORIES, GET_GOODS_BY_ID } from './queries';
import InputSelect from '../Inputs/InputSelectCategory';
import { useState } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean, 
  goodsId: number | undefined,
  handleClose(): void
}

export const GoodsModal = ({open, goodsId, handleClose}: Props) => {

  const {t} = useEasyTranslation("Admin.goodsModal")
  const [file, setFile] = useState<File>()
  const { loading, error, data } = useQuery(goodsId ? GET_GOODS_BY_ID : GET_CATEGORIES, {
    variables: {id: goodsId}
  });
  const [addGoods] = useMutation(ADD_GOODS)

  const handleFileChange = (e: any) => {
    console.log(e.target.files[0])
    setFile(e.target.files[0]);
  };

  const onSubmit = async (values: any) => {
    if (!file) return

    await addGoods({
      variables:{
        data: {...values, sale: 0},
        img: file
    }
    })
    .then(({data})=>{
      console.log(data)
    })
    .catch(({e})=>{
      console.log(e)
    })

  }
  
  if (loading || error) return <></>


  return (
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box>
        <Form
        initialValues={data?.getGoodsById ? data?.getGoodsById : undefined}
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <Box sx={style}>
              <Grid container gap={1}>
                <Grid item width='100%'>
                  <Divider>{t('goodsName')}</Divider>
                </Grid>
                <Grid item container gap={2} justifyContent='center'>
                  <Grid item width="48%">
                    <FormInput name='name_En' label={t("en")}/>
                  </Grid>
                  <Grid item width="48%">
                    <FormInput name='name_Ua' label={t("ua")}/>
                  </Grid>
                </Grid>
                <Grid item width='100%'>
                  <Divider>{t('goodsDescription')}</Divider>
                </Grid>
                <Grid item container gap={2} justifyContent='center'>
                  <Grid item width="48%">
                    <FormInput name="description_En" multiline rows={10} label={t("en")}/>
                  </Grid>
                  <Grid item width="48%">
                    <FormInput name="description_Ua" multiline rows={10} label={t("ua")}/>
                  </Grid>
                </Grid>
                <Grid item width='100%'>
                  <Divider>{t('goodsPrice')}</Divider>
                </Grid>
                <Grid item container gap={2} justifyContent='center'>
                  <Grid item width="48%">
                    <FormInput name="price_En" label={t("en")} startIcon='$'/>
                  </Grid>
                  <Grid item width="48%">
                    <FormInput name="price_Ua" label={t("ua")} startIcon='₴'/>
                  </Grid>
                </Grid>
                <Grid item width='100%'>
                  <Divider>{t('goodsCategory')}</Divider>
                </Grid>
                <Grid item container gap={2} justifyContent='center'>
                  <Grid item width="48%">
                    <InputSelect label={t('goodsCategoryName')} items={data?.getCategories} name="category" />
                  </Grid>
                  <Grid item width="48%">
                    <Button variant='outlined' component="label" fullWidth sx={{height:"100%"}}>
                      {t('goodsUploadImage')}
                      <input className='upload' hidden type='file' onChange={handleFileChange}/>
                    </Button>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button type='submit'>{goodsId ? t('buttonSubmitChange') : t('buttonSubmitAdd')}</Button>
                </Grid>
              </Grid>
              
            </Box>
          </form>
        )}/>
        </Box>
      </Modal>
  );
}