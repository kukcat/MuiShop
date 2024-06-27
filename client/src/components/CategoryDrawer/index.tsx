import {Box, Drawer, IconButton, styled } from '@mui/material';
import React, { memo } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useEasyTranslation } from '../../hooks/useEasyTranslate';
import { Link } from 'react-router-dom'
import { Sidebar } from '..';

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  marginTop: 16,
  marginLeft: 16,
  width: 'auto'
}));

const CategoryDrawer = () => {

 const [open, setOpen] = React.useState(false);
 const {t} = useEasyTranslation("Header")

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
        <IconButton sx={{ml:2, color: '#fff'}} onClick={toggleDrawer(true)}>
            <MenuIcon/>
        </IconButton>
        <Drawer sx={{ width:'300px' }} onClick={toggleDrawer(false)} open={open} onClose={toggleDrawer(false)} anchor='left'>
            <StyledLink to={'/'}>
                {t('DrawerHome')}
            </StyledLink>
            <Box role="presentation" sx={{ width:'300px', ml: 2, mr: 2  }}>
              <Sidebar/> 
            </Box>
        </Drawer>
    </>
  )
}

export default memo(CategoryDrawer)