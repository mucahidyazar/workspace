import fs from 'fs'

import {LANGUAGES} from '@/constants'
import path from 'path'

async function serverSideTranslations<T = keyof typeof LANGUAGES, N = string>(
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

async function clientSideTranslations<T = keyof typeof LANGUAGES, N = string>(
  locale: T,
  namespaces: N[],
  localePath: string = 'public/locales',
) {
  // const jsonsX = await import('' + `public/locales/tr/common.json`)
  // console.log({jsonsX})
  // i want import like above
  // but this import doesnt get referance the path in here
  // the import path is the path of the file that call this function
  // so i need to get the path of the file that call this function
  const callerFile = path.resolve()
  console.log({callerFile})
  const callerDir = path.dirname(callerFile)
  console.log({callerDir})
  const callerDirName = path.basename(callerDir)
  console.log({callerDirName})
  const jsons = await import('' + `${callerDir}/public/locales/tr/common.json`)
  console.log({jsons})

  const content = await fs.readFileSync(
    `${callerDir}/public/locales/tr/common.json`,
    'utf8',
  )
  console.log({content})

  const translations = await Promise.all(
    namespaces?.map(async namespace => {
      const targetPath = `${localePath}/${locale}/${namespace}.json`
      const content = await import('' + targetPath)
      const parsedContent = JSON.parse(JSON.stringify(content))

      return {
        [namespace as string]: parsedContent,
      }
    }),
  )

  return Object.assign({}, ...translations)
}

function cdnTranslations<T = keyof typeof LANGUAGES, N = string>(
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
  localePath?: string
}
async function getTranslations<T = keyof typeof LANGUAGES>(
  ctx: any,
  namespaces?: string[],
  options?: IGetTranslationsOptions,
) {
  const locale = ctx.locale
  const isServerRouting = !!ctx.req
  if (!locale) return {}
  if (!namespaces || !namespaces.length) return {}

  if (options?.cdn) {
    return cdnTranslations(locale, namespaces, options.cdn)
  }

  if (isServerRouting) {
    return serverSideTranslations(locale, namespaces, options?.localePath)
  }

  return clientSideTranslations(locale, namespaces, options?.localePath)
}

export {getTranslations}
