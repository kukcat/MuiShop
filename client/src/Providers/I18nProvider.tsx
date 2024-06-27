import React, { useContext } from 'react'
import i18n from "../utils/i18n"
import {I18nextProvider} from "react-i18next";
// import { AppContext } from './AppContextProvider';
// import { CONTEXT_TYPES } from '../utils/consts';

interface Props {
    children: React.ReactNode
}
const I18nProvider = ({children}: Props) => {

    // const {dispatch} = useContext(AppContext)

//     i18n.on('languageChanged', ()=>{
//       dispatch({
//           type: CONTEXT_TYPES.SET_LANGUAGE,
//           locale: i18n.language
//       })
//   })

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  )
}

export default I18nProvider
