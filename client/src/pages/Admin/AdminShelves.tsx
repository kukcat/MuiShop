import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const AdminShelves = () => {
  
    const {t} = useTranslation()
  
  
    return (
    <Box>
        <Box>
            <Typography fontSize={30}>{t("Admin.currentShelves")}:</Typography>
        </Box>
        <Box>
            <Typography fontSize={30}>{t("Admin.addShelf")}:</Typography>
            <Box>
                
            </Box>
        </Box>
    </Box>
  )
}

export default AdminShelves