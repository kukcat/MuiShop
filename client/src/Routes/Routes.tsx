import { BrowserRouter, Route, Routes as RouteWrapper } from 'react-router-dom'
import { Container } from '@mui/material'
import Header from '../components/Header'
import { Footer } from '../components'
import MainPage from '../pages/Main'
import CategoryPage from '../pages/Category'
import GoodsPage from '../pages/Goods'
import { AdminPage } from '../pages/Admin'
import NavigateRoutes from './NavigateRoutes'
import SidebarRoutes from './SidebarRoutes'
import { NotFoundPage, SearchPage } from '../pages'


const Routes = () => {


    return (
      <BrowserRouter >
              <RouteWrapper>
                    <Route element={<NavigateRoutes/>}>
                        <Route element={<SidebarRoutes/>}>
                                <Route path='/' element={<MainPage/>}/>
                                <Route path='category'>
                                    <Route path=':category' element={<CategoryPage/>}/>
                                </Route>
                                <Route path='goods'>
                                    <Route path=':url' element={<GoodsPage/>}/>
                                </Route>
                                <Route path='search'>
                                    <Route path=':findString' element={<SearchPage/>}/>
                                </Route>
                        </Route>
                        <Route path='admin' element={<AdminPage/>}/>
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Route>
              </RouteWrapper>
      </BrowserRouter>
    )
}

export default Routes