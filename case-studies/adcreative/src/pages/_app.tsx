import 'react-toastify/dist/ReactToastify.css';


import { QueryClientProvider } from '@tanstack/react-query';
// import { LanguageProvider } from 'mucahid-test1'
// import { getTranslations } from 'mucahid-test2'
import { getTranslations, LanguageProvider } from 'next-translation'
import App, { AppContext } from 'next/app';
import { ToastContainer } from 'react-toastify';

import { tanstackReactQueryClient } from '@/configs';
import { ThemeProvider } from '@/providers';

import type { AppProps } from 'next/app';
// import GetInitialPropsContext

interface IMyApp extends AppProps {
  translations: Record<string, Record<string, string>>
}

function MyApp({ Component, pageProps, translations }: IMyApp) {
  return (
    <LanguageProvider translations={translations}>
      <ThemeProvider>
        <QueryClientProvider client={tanstackReactQueryClient}>
          <Component {...pageProps} />
          <ToastContainer />
        </QueryClientProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  const translations = await getTranslations(appContext.ctx, ['common', 'footer']);

  console.log({ translations })
  const jsons = await import('public/locales/tr/common.json')
  console.log({ jsons })

  return { ...appProps, translations: {} };
}

export default MyApp;

