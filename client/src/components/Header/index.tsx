import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CartDrawer from '../CartDrawer';
import CategoryDrawer from '../CategoryDrawer';
import { useState } from 'react';
import { useEasyTranslation } from '../../hooks/useEasyTranslate';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = () => {
  
  const navigate = useNavigate()
  const {t} = useEasyTranslation('Header')
  const [find, setFind] = useState<string>('')

  const navigateToMain = () => {
    navigate(`/`)
  } 

  const searchNavigate = () => {
    if (!find.trim()) return
    navigate(`/search/${encodeURIComponent(find.trim())}`)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static">
      <Container maxWidth='xl'>
        <Toolbar>
          <Box sx={{display: { xs: 'block', md: 'none' }}}>
            <CategoryDrawer/>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, cursor: 'pointer' }}
            onClick={navigateToMain}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={t('searchField')}
              inputProps={{ 'aria-label': 'search' }}
              value={find}
              onChange={(e)=>setFind(e.target.value)}
            />
          </Search>
          <Button  onClick={searchNavigate} sx={{color: 'background.paper', ml: 2}}>
            {t('searchButton')}
          </Button>
          <CartDrawer/>
        </Toolbar>
      </Container>
      </AppBar>

    </Box>
  );
}


export default Header