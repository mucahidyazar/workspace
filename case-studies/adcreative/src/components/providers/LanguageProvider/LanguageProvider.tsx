import { useRouter } from 'next/router';
import React, { createContext } from 'react';

import { LANGUAGE } from '@/constants';
import { setStorage } from '@/utils';

type ILanguage = keyof typeof LANGUAGE

export const LanguageContext = createContext<{
  language: ILanguage;
  changeLanguage: (selectedLanguage: ILanguage) => void;
  translations: Record<string, Record<string, string>>,
  cdn?: undefined
}>({
  language: 'en',
  changeLanguage: () => null,
  translations: {},
  cdn: undefined
});

//! translations would be like === { common: { todos: 'Todos' }, footer: { about: 'About' } 
export class LanguageProvider extends React.Component<{
  children: React.ReactNode;
  translations: Record<string, Record<string, string>>,
  cdn?: undefined
}> {
  state = { language: LANGUAGE.tr };

  render() {
    const changeLanguage = (selectedLanguage: ILanguage) => {
      if (selectedLanguage) {
        setStorage('language', selectedLanguage);
        this.setState({ language: selectedLanguage });
        return;
      }
      const newLanguage = this.state.language === LANGUAGE.tr ? LANGUAGE.en : LANGUAGE.tr;
      this.setState({ language: newLanguage });
    };

    return (
      <LanguageContext.Provider
        value={{
          language: this.state.language as any,
          changeLanguage,
          translations: this.props.translations,
          cdn: this.props.cdn
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

interface ITOptions {
  namespace: string;
}
interface IUseLanguage {
  language: keyof typeof LANGUAGE;
  changeLanguage: (selectedLanguage: keyof typeof LANGUAGE) => void;
  t: (key: string, options?: ITOptions) => string;
}
export const useLanguage = (namespaces?: string[], _options?: any): IUseLanguage => {
  const router = useRouter()
  const { language, changeLanguage, translations } = React.useContext(LanguageContext);

  const t = (key: string, options: ITOptions = { namespace: "common" }): string => {
    console.log({
      namespaces,
      options,
      key
    })
    if (!translations || !Object.keys(translations).length) return key
    if (!namespaces) return translations[options.namespace][key]

    const collectedTranslations = namespaces.reduce((acc, namespace) => {
      return { ...acc, ...translations[namespace] }
    }, {}) as Record<string, string>

    if (!Object.keys(collectedTranslations).length) return key

    return collectedTranslations[key]
  }

  return {
    language,
    changeLanguage: (value) => {
      changeLanguage(value);
      router.push(router.pathname, router.asPath, { locale: value })
    },
    t
  }
};
