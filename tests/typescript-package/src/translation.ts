import * as fs from 'fs'

import {LANGUAGE} from '@/constants'

async function serverSideTranslations<T = keyof typeof LANGUAGE, N = string>(
  locale: T,
  namespaces: N[],
  localePath: string = 'public/locales',
) {
  const translations = await Promise.all(
    namespaces?.map(async namespace => {
      const content = await fs.readFileSync(
        `${localePath}/${locale}/${namespace}.json`,
        'utf8',
      )
      const parsedContent = JSON.parse(content)
      return {
        [namespace as string]: parsedContent,
      }
    }),
  )

  return Object.assign({}, ...translations)
}

async function clientSideTranslations<T = keyof typeof LANGUAGE, N = string>(
  locale: T,
  namespaces: N[],
  localePath: string = 'public/locales',
) {
  const translations = await Promise.all(
    namespaces?.map(async namespace => {
      const content = await import(`${localePath}/${locale}/${namespace}.json`)
      const parsedContent = JSON.parse(JSON.stringify(content))
      console.log('client', {parsedContent})

      return {
        [namespace as string]: parsedContent,
      }
    }),
  )

  return Object.assign({}, ...translations)
}

function cdnTranslations<T = keyof typeof LANGUAGE, N = string>(
  locale: T,
  namespaces: N[],
  cdnBaseUrl: string,
) {
  return Promise.all(
    namespaces?.map(async namespace => {
      const content = await fetch(`${cdnBaseUrl}/${locale}/${namespace}.json`)
      const parsedContent = await content.json()
      return {
        [namespace as string]: parsedContent,
      }
    }),
  )
}

interface IGetTranslationsOptions {
  cdn?: string
}
async function getTranslations<T = keyof typeof LANGUAGE>(
  locale: T,
  namespaces?: string[],
  options?: IGetTranslationsOptions,
) {
  if (!locale) return {}
  if (!namespaces || !namespaces.length) return {}

  if (options?.cdn) {
    return cdnTranslations(locale, namespaces, options.cdn)
  }

  if (typeof window === 'undefined') {
    return serverSideTranslations(locale, namespaces)
  }

  return clientSideTranslations(locale, namespaces)
}

export {getTranslations}
