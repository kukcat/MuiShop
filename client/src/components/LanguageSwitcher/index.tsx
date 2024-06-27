import { Box, Button, Divider } from '@mui/material'
import i18n from '../../utils/i18n'
import { useNavigate } from 'react-router-dom';

const LanguageSwitcher = () => {
    
    const navigate = useNavigate();

    const setLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        navigate(0)
    }

    console.log(i18n.language)

    return (
        <Box display={'flex'} >
            <Button fullWidth onClick={()=>setLanguage('uk')}>UA</Button>
            <Divider orientation='vertical' variant="middle" flexItem/>
            <Button fullWidth onClick={()=>setLanguage('en')}>EN</Button>
        </Box>
    )
}

export default LanguageSwitcher