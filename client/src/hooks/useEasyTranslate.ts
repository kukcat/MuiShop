import { useTranslation } from 'react-i18next';

export const useEasyTranslation = (namespace: string) => {
  const translate = useTranslation();

  const t = (key: string) => {
    return translate.t(`${namespace}.${key}`)
  }
  
  return {
    t,
    standartT: translate.t
  }

};
