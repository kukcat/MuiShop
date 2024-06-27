import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, Divider, Grid, Typography } from '@mui/material';
import { useEasyTranslation } from '../../hooks/useEasyTranslate';
import { Form } from 'react-final-form';
import { FormInput, FromCheckbox } from '../Inputs';
import { useMutation } from '@apollo/client';
import { ADD_CATEGORY } from './queries';

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
  categoryId: number | undefined,
  handleClose(): void
}

export const CategoryModal = ({open, categoryId, handleClose}: Props) => {


  const {t} = useEasyTranslation("Admin.categoryModal")
//   const { loading, error, data } = useQuery(GET_CATEGORY_BY_ID, {
//     variables: {id: categoryId},
//     skip: !Boolean(categoryId)
//   });

  const [addCategory] = useMutation(ADD_CATEGORY)

  const onSubmit = (values: any) => {
    
    console.log(values)

      addCategory({
        variables: {
          ...values,
          isOnBar: Boolean(values.isOnBar)
        },
      
      })
      .then(({data})=>{
        console.log(data)
      })
      .catch(({e})=>{
        console.log(e)
      })

  }
  
//   if (loading || error) return <></>



  return (
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box>
        <Form
        // initialValues={data?.getGoodsById ? data?.getGoodsById : undefined}
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <Box sx={style}>
              <Grid container gap={1}>
                <Grid item width='100%'>
                  <Divider>{t('categoryName')}</Divider>
                </Grid>
                <Grid item container gap={2} justifyContent='center'>
                  <Grid item width="48%">
                    <FormInput name='name_En' label={t("en")}/>
                  </Grid>
                  <Grid item width="48%">
                    <FormInput name='name_Ua' label={t("ua")}/>
                  </Grid>
                </Grid>
                {/* <Grid item width='100%'>
                  <Divider>{t('goodsDescription')}</Divider>
                </Grid>
                <Grid item container gap={2} justifyContent='center'>
                  <Grid item width="48%">
                    <FormInput name="description_En" multiline rows={10} label={t("en")}/>
                  </Grid>
                  <Grid item width="48%">
                    <FormInput name="description_Ua" multiline rows={10} label={t("ua")}/>
                  </Grid>
                </Grid> */}
                <Grid item container alignItems='center'>
                  <Grid item>
                    <Typography>{t('isOnBar')}</Typography>
                  </Grid>
                  <Grid item>
                    <FromCheckbox name='isOnBar'/>
                  </Grid>
                </Grid>
                <Grid item justifyContent='center'>
                  <Button type='submit'>{categoryId ? t('buttonSubmitChange') : t('buttonSubmitAdd')}</Button>
                </Grid>
              </Grid>
              
            </Box>
          </form>
        )}/>
        </Box>
      </Modal>
  );
}