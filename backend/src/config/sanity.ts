import { createClient } from '@sanity/client'

const DEFAULT_PROJECT_ID = 'y7j5j2mt'
const DEFAULT_DATASET = 'production'

const projectId = process.env.SANITY_PROJECT_ID || DEFAULT_PROJECT_ID
const dataset = process.env.SANITY_DATASET || DEFAULT_DATASET
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01'
const token = process.env.SANITY_API_TOKEN || process.env.SANITY_TOKEN || undefined

const publicSanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

const authenticatedSanityClient = token
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      token,
      useCdn: false,
    })
  : null

type SanityFetchParams = Record<string, unknown>

const isAuthenticationError = (error: unknown): boolean => {
  if (!(error instanceof Error)) {
    return false
  }

  const authErrorMessages = ['unauthorized', 'permission', 'token', 'forbidden']
  const message = error.message.toLowerCase()

  return authErrorMessages.some((snippet) => message.includes(snippet))
}

export const fetchFromSanity = async <Result>(query: string, params?: SanityFetchParams) => {
  if (!authenticatedSanityClient) {
    return publicSanityClient.fetch<Result>(query, params)
  }

  try {
    return await authenticatedSanityClient.fetch<Result>(query, params)
  } catch (error) {
    if (!isAuthenticationError(error)) {
      throw error
    }

    console.warn('Sanity token authentication failed, falling back to public dataset access.')
    return publicSanityClient.fetch<Result>(query, params)
  }
}

export default publicSanityClient
