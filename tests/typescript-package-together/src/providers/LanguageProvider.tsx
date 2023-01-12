import React, { createContext } from 'react';

type TLanguageContext = {
  translations: Record<string, Record<string, string>>,
  cdn?: undefined
}
export const LanguageContext = createContext<TLanguageContext>({
  translations: {},
  cdn: undefined,
});

//! translations would be like === { common: { todos: 'Todos' }, footer: { about: 'About' } 
type ILanguageProvider = Omit<TLanguageContext, 'changeLanguage'> & {
  children: React.ReactNode;
}
export function LanguageProvider({ children, cdn, translations }: ILanguageProvider) {
  return (
    <LanguageContext.Provider
      value={{
        translations,
        cdn
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

interface ITOptions {
  namespace: string;
}
type TUseLanguage<L = string> = {
  t: (key: string, options?: ITOptions) => string;
  changeLanguage: (value: L) => void;
}
export function useLanguage(namespaces?: string[], _options?: any): TUseLanguage {
  const { translations } = React.useContext(LanguageContext);

  const t = (key: string, options: ITOptions = { namespace: "common" }): string => {
    if (!translations || !Object.keys(translations).length) return key
    if (!namespaces) return translations[options.namespace][key]

    const collectedTranslations = namespaces.reduce((acc, namespace) => {
      return { ...acc, ...translations[namespace] }
    }, {}) as Record<string, string>

    if (!Object.keys(collectedTranslations).length) return key

    return collectedTranslations[key]
  }

  return {
    changeLanguage: (value = '') => {
      if (typeof window !== 'undefined') {
        const locationLanguage = window.location.pathname.split('/')[1];
        const historyLanguage = window.history.state?.options?.locale
        const isDefaultLanguage = locationLanguage === ''

        console.log({ value, locationLanguage, isDefaultLanguage, historyLanguage })

        if (isDefaultLanguage) {
          return;
        }

        const currentLanguage = historyLanguage || locationLanguage;

        if (currentLanguage) {
          const removedLanguageUrl = window.location.pathname.split('/').slice(2).join('/');
          const newUrl = `/${value}${removedLanguageUrl}`;
          window.history.pushState(window.history.state, '', newUrl);
          window.location.reload();
          return;
        }
      }
    },
    t
  }
};
