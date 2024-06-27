import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header, Sidebar } from '../components'
import { memo } from 'react'

const SidebarRoutes = () => {

    return (
        <>
        
        <Grid container spacing={2} mt={0} > 
            <Grid item sx={{ display: { xs: 'none', md: 'flex' }, position:'sticky', width: '200px'}}>
                <Sidebar/>
            </Grid>
            <Grid item sx={{width: {xs: '100%', md: `calc(100% - 200px)`}}} >
                <Outlet/>
            </Grid>
        </Grid>
        </>
    )
    }

export default memo(SidebarRoutes)

