'use client'
import {QueryClientProvider} from '@tanstack/react-query'

import {tanstackReactQueryClient} from '@/configs'

export default function RootTemplate({children}: {children: React.ReactNode}) {
  return (
    <QueryClientProvider client={tanstackReactQueryClient}>
      {children}
    </QueryClientProvider>
  )
}
