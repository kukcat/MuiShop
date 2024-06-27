import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_CATEGORIES } from './queries'
import { Divider, List, ListItem, ListItemButton, ListItemText, styled } from '@mui/material'
import { Link } from 'react-router-dom'
import LanguageSwitcher from '../LanguageSwitcher'

const StyledLink = styled(Link)(({theme})=>({

  color: theme.palette.getContrastText(theme.palette.background.paper),
  textDecoration: 'none'

}))

export const Sidebar = () => {

    const {loading , data} = useQuery(GET_CATEGORIES)

    if (loading) return<></>

    return (
    <nav aria-label="sidebar">
        <List>
          {data.getBarCategory.map((element: any, index: number)=>(
            <ListItem disablePadding key={index} >
                <StyledLink to={`category/${element.url}`} >
                    <ListItemText primary={element.name} />
                </StyledLink>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <LanguageSwitcher/>
      </nav>
  )
}

