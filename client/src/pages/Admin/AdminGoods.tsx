import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { GET_GOODS } from './queries'
import { Goods } from '../../models/good'
import { useEasyTranslation } from '../../hooks/useEasyTranslate'
import { CategoryModal } from '../../components/CategoryModal'
import GoodsMain from './parts/goodsMain'
import { GoodsChanger } from './parts/goodsChanger'

const AdminGoods = () => {

  const {t} = useEasyTranslation("Admin")
  const {data} = useQuery(GET_GOODS)
  const [currentGoods, setCurrentGoods] = useState<Goods | null>(null);  
  const [openGoodsModal, setOpenGoodsModal] = useState<boolean>(false)
  const [currentGoodsId, setCurrentGoodsId] = useState<number | undefined>()

  const [currentCategory, setCurrentCategory] = useState<Goods | null>(null);  
  const [openCategoryModal, setOpenCategoryModal] = useState<boolean>(false)
  const [currentCategoryId, setCurrentCategoryId] = useState<number | undefined>()

  const handleCloseGoods = () => {
    setOpenGoodsModal(false)
  }

  const handleOpenChange = () => {

    if (!currentGoods?.id) return

    setCurrentGoodsId(currentGoods.id)
    setOpenGoodsModal(true)
  }

  const handleOpenAddGoods = () => {
    setCurrentGoodsId(undefined)
    setOpenGoodsModal(true)
  }

  const handleOpenAddCategory = () => {
    setCurrentCategoryId(undefined)
    setOpenCategoryModal(true)
  }

  const handleCloseCategory = () => {
    setOpenCategoryModal(false)
  }

  return (
    <>
      {openGoodsModal
        ? <GoodsChanger
            handleClose={handleCloseGoods}
            goodsId={currentGoodsId}
        />
        : 
        <GoodsMain
          data={data?.getAllGoods.goods}
          currentGoods={currentGoods}
          handleOpenAddCategory={handleOpenAddCategory}
          handleOpenAddGoods={handleOpenAddGoods}
          handleOpenChange={handleOpenChange}
          setCurrentGoods={setCurrentGoods}
        />  
      }
      {openCategoryModal
        ? <CategoryModal
            open={openCategoryModal}
            handleClose={handleCloseCategory}
            categoryId={currentGoodsId}
        />
        : null  
      }
    </>

  )
}

export default AdminGoods