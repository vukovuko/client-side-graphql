'use client'

import { cacheExchange } from '@urql/exchange-graphcache'
import {
  UrqlProvider,
  createClient,
  fetchExchange,
  ssrExchange,
} from '@urql/next'
import { PropsWithChildren, useMemo } from 'react'

import { getToken } from '@/utils/token'
import { url } from '@/utils/url'

export default function GQLProvider({ children }: PropsWithChildren) {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange({
      isClient: typeof window !== 'undefined',
    })

    const client = createClient({
      url,
      exchanges: [cacheExchange({}), ssr, fetchExchange],
      fetchOptions: () => {
        const token = getToken()

        return token
          ? {
              headers: { authorization: `Bearer ${token}` },
            }
          : {}
      },
    })

    return [client, ssr]
  }, [])

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  )
}
